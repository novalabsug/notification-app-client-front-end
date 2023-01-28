import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../images/img.jpg";
import img1 from "../../images/img-1.png";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";

import { Settings, ContactMail, Message, LiveHelp } from "@mui/icons-material";
import Nav from "./nav/Nav";

const Navbar = ({ user }) => {
  const companyStore = useSelector((state) => state.company);

  const currentYear = () => {
    return new Date().getFullYear();
  };

  let CompaniesFetch = [];
  let UnreadCompaniesFetch = [];
  let Companies = [];

  // CompaniesFetch = companyStore?.companies.Companies;

  companyStore?.companies?.Companies
    ? (CompaniesFetch = companyStore.companies.Companies)
    : (CompaniesFetch = []);

  companyStore?.companies?.CompanyUnread
    ? (UnreadCompaniesFetch = companyStore.companies.CompanyUnread)
    : (UnreadCompaniesFetch = []);

  CompaniesFetch.forEach((company) => {
    UnreadCompaniesFetch.forEach((UnreadCompany) => {
      if (company.companyUsername == UnreadCompany.company) {
        company = { ...company, unreadMessages: UnreadCompany.count };
        Companies = [...Companies, company];
      }
    });
  });

  return (
    <section id="navbar">
      <div className="profile-wrapper hide-on-small-medium flx">
        <img src={user?.image ? user?.image : img1} />
        <div className="profile">
          <h5 className="f-size-reg bold">Signed in as</h5>
          <p className="f-size-reg primary-color bold-txt">{user?.username}</p>
        </div>
      </div>
      <ul className="companies-wrapper hide-on-small-medium">
        {Companies.length > 0
          ? Companies.map((company) => (
              <Nav key={company._id} company={company} user={user} />
            ))
          : "Loading ..."}
      </ul>
      <div className="modal-form" id="mobile-nav">
        <i className="fa-solid fa-close" id="mobile-nav-close-btn"></i>
        <div className="profile-wrapper flx">
          <img src={user?.image ? user?.image : img1} />
          <div className="profile">
            <h5 className="f-size-reg bold">Signed in as</h5>
            <p className="f-size-reg primary-color bold-txt">
              {user?.username}
            </p>
          </div>
        </div>
        <ul className="companies-wrapper">
          {Companies.length > 0
            ? Companies.map((company) => (
                <Nav key={company._id} company={company} user={user} />
              ))
            : "Loading ..."}
        </ul>
      </div>
      <footer className="hide-on-small-medium">
        <div className="flx social-wrapper jc-center">
          <a href="">
            <i className="fa-solid fa-gear"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-comment"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-question-circle"></i>
          </a>
        </div>
        <p className="center-align">Copyright &copy; {currentYear()}</p>
      </footer>
    </section>
  );
};

export default Navbar;
