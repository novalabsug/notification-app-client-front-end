import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { createUser } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  console.log(users);

  users.forEach((user) => {
    if (user.user) {
      navigate("/signin");
    }
  });

  const [userData, setUserData] = useState({
    username: "",
    gender: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(userData));
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
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            {users.map((user) => (
              <p className="error username-error">{user.error}</p>
            ))}
          </div>
          <div className="input">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={userData.gender}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
            >
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
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
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
      </form>
    </main>
  );
};

export default Signup;
