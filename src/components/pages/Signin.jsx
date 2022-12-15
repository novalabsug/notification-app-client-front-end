import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { addDays } from "date-fns";

// import { signinUser } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";
import { signinAuthUser } from "../../features/Auth/AuthSlice";

const Signin = () => {
  let results = useSelector((state) => state.auth);

  if (results?.user?.token) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: results?.user.result.id,
        username: results?.user.result.username,
        image: "",
      })
    );

    document.cookie = `notification_mail_app_session=loggedIn;expires=${addDays(
      new Date(),
      2
    )};path=/`;

    window.location.assign("/");
  }

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signinAuthUser(userData));

    e.target.querySelectorAll(".input-error").forEach((el) => {
      el.innerHTML = "";
    });
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <main id="signin">
      <h3 className="f-size-xlrg center-align">Sign-In to your account</h3>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input">
            <label htmlFor="username">Username</label>
            <FontAwesomeIcon className="icon" icon={faUser} />
            <input
              type="text"
              placeholder="username"
              name="username"
              autoComplete="false"
              onChange={handleChange}
            />
            <p className="error username-error">{results?.error?.username}</p>
          </div>
        </div>
        <div className="form-group">
          <div className="input">
            <label htmlFor="password">Password</label>
            <FontAwesomeIcon className="icon" icon={faLock} />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <p className="error password-error">{results?.error?.password}</p>
          </div>
        </div>
        <div className="wrapper">
          <p>
            Or <a href="/signup">Create an account</a>
          </p>
        </div>
        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
    </main>
  );
};

export default Signin;
