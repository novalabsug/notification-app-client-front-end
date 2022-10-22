import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const MainNav = () => {
  let newState = {};

  if (localStorage.getItem("profile") != "") {
    newState = localStorage.getItem("profile");
  } else {
    newState = JSON.stringify(newState);
  }

  const [user, setUser] = useState(JSON.parse(newState));
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch({ type: "LOGOUT" });
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
        {user?.result ? (
          <a onClick={logoutUser} className="btn">
            Logout
          </a>
        ) : (
          <a href="/signin" className="btn">
            Login
          </a>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
