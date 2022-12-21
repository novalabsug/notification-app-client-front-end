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
      <div className="profile-wrapper flx">
        <img src={user?.image ? user?.image : img1} />
        <div className="profile">
          <h5 className="f-size-reg bold">Signed in as</h5>
          <p>{user?.username}</p>
        </div>
      </div>
      <ul className="companies-wrapper">
        {Companies.length > 0
          ? Companies.map((company) => (
              <Nav key={company._id} company={company} user={user} />
            ))
          : "Loading ..."}
      </ul>
      <footer>
        <div className="flx social-wrapper jc-center">
          <a href="">
            <Settings color="white" />
          </a>
          <a href="">
            <Message color="white" />
          </a>
          <a href="">
            <LiveHelp color="white" />
          </a>
        </div>
        <p className="center-align">Copyright &copy; 2022</p>
      </footer>
    </section>
  );
};

export default Navbar;
