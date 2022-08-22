import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import { signinUser } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";

const Signin = () => {
  let users = useSelector((state) => state.users);
  const navigate = useNavigate();

  users.forEach((user) => {
    if (user.user) {
      navigate("/");
    }
  });

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signinUser(userData));

    e.target.querySelectorAll(".input-error").forEach((el) => {
      el.innerHTML = "";
    });
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
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <div className="input-error">
              {users.map((user) => (
                <p className="error username-error">
                  {user.error.username !== "" ? user.error.username : ""}
                </p>
              ))}
            </div>
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
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <div className="input-error">
              {users.map((user) => (
                <p className="error password-error">
                  {user.error.password !== "" ? user.error.password : ""}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="wrapper">
          <p>
            Or <a href="/">Create an account</a>
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
