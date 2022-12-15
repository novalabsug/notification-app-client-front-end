import react, { useState } from "react";

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
      <div className="holder logo">
        <a href="/">LOGO</a>
      </div>
      <form className="search-form">
        <input type="text" placeholder="search" />
      </form>
      <div className="side-nav flx jc-end">
        <a onClick={logoutUser} className="btn">
          Logout
        </a>
      </div>
    </nav>
  );
};

export default MainNav;
