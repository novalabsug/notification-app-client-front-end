import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Google, GitHub } from "@mui/icons-material";

import { createUser } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

import { googleProvider, githubProvider } from "../../config/authMethod";
import socialMediaAuth from "../../services/auth";

const Signup = () => {
  const results = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    username: "",
    accountID: "",
    gender: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(userData));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleGoogleAuth = async () => {
    const res = await socialMediaAuth(googleProvider);
  };

  const handleGithubAuth = async () => {
    const res = await socialMediaAuth(githubProvider);
  };
  return (
    <main id="signup">
      <h3 className="f-size-xlrg center-align">Create new account</h3>
      <h3 className="center-align f-size-reg">
        To create an account, please enter the account ID that you were given
      </h3>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group grd grd-cl-2">
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
            <p className="error username-error">{results.authData}</p>
          </div>
          <div className="input">
            <label htmlFor="accountID">Account ID</label>
            <FontAwesomeIcon className="icon" icon={faUser} />
            <input
              type="text"
              placeholder="Enter unique Account ID"
              name="accountID"
              autoComplete="false"
              onChange={handleChange}
            />
            <p className="error username-error">{results.authData}</p>
          </div>
        </div>
        <div className="form-group">
          <div className="input">
            <label htmlFor="gender">Gender</label>
            <select name="gender" onChange={handleChange}>
              <option disabled>---</option>
              <option value="none">Prefer not say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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
            <p className="error password-error">{results.authData}</p>
          </div>
        </div>
        <div className="wrapper">
          <p>
            Or <a href="/">Sign In</a>
          </p>
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <div className="social-auth-wrapper" hidden>
          <h3 className="center-align f-size-reg">Or signin with</h3>
          <div className="flx jc-center">
            <a className="btn google-sign-in" onClick={handleGoogleAuth}>
              <Google fontSize="small" /> Google
            </a>
            <a className="btn github-sign-in" onClick={handleGithubAuth}>
              <GitHub fontSize="small" /> Github
            </a>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Signup;
