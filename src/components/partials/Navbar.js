import react from "react";
import img from "../../images/img.jpg";
import img1 from "../../images/img-1.png";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";

import { Settings, ContactMail, Message, LiveHelp } from "@mui/icons-material";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="profile-wrapper flx">
        <img src={img1} />
        <div className="profile">
          <h5 className="f-size-reg bold">John Doe</h5>
          <p>johndoe@email.com</p>
        </div>
      </div>
      <ul className="companies-wrapper">
        <li className="company-wrapper active flx">
          <img src={img} />
          <h4 className="bold">Digital Oceans</h4>
          <p className="num">1</p>
        </li>
        <li className="company-wrapper flx">
          <img src={img2} />
          <h4 className="bold">Blue Hosting</h4>
          <p className="num">1</p>
        </li>
        <li className="company-wrapper flx">
          <img src={img3} />
          <h4 className="bold">Adidas</h4>
          <p className="num">1</p>
        </li>
        <li className="company-wrapper flx">
          <img src={img1} />
          <h4 className="bold">Google</h4>
          <p className="num">1</p>
        </li>
      </ul>
      <footer>
        <div className="flx social-wrapper jc-center">
          <a href="">
            <Settings />
          </a>
          <a href="">
            <Message />
          </a>
          <a href="">
            <LiveHelp />
          </a>
        </div>
        <p className="center-align">Copyright &copy; 2022</p>
      </footer>
    </section>
  );
};

export default Navbar;
