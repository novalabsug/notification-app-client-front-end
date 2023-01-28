import react, { useState } from "react";
import logoSvg from "../../images/nova-2.svg";

const MainNav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const logoutUser = () => {
    document.cookie = `notification_mail_app_session=;max-age=1;path=/;`;
    document.cookie = `notification_app_JWT_secret=;max-age=1;path=/;`;

    localStorage.setItem("user", "{}");

    window.location.assign("/signin");
  };

  return (
    <nav className="main-nav flx jc-btn">
      <div className="holder logo hide-on-small-medium">
        <a href="/" className="t-up f-size-lrg bold-txt-2">
          n
          <span className="f-size-lrg t-up bold-txt-2 primary-color">mail</span>
        </a>
      </div>
      <div className="logo holder hide-on-large flx">
        <div className="menu-btn" id="mobile-nav-open-btn">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <a href="/" className="t-up f-size-lrg bold-txt-2">
          n
          <span className="f-size-lrg t-up bold-txt-2 primary-color">mail</span>
        </a>
      </div>
      <form className="search-form hide-on-small-medium">
        <input type="text" placeholder="search" />
      </form>
      <div className="side-nav flx jc-end">
        <div className="btn-wrapper">
          <a onClick={logoutUser} className="btn">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
