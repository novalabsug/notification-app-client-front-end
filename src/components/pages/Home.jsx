import react, { useState, useEffect } from "react";

import Navbar from "../partials/Navbar";
import Messages from "../Messages/Messages";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { isUserLoggedIn } from "../middleware/checkLogin";

const Home = () => {
  // check user log in
  isUserLoggedIn();

  let newState = {};
  if (localStorage.getItem("profile") != "") {
    newState = localStorage.getItem("profile");
  } else {
    newState = JSON.stringify(newState);
  }

  const [user, setUser] = useState(JSON.parse(newState));

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCompanyData(user.result));
  }, []);

  return (
    <main id="landing-page">
      <div className="container">
        <Navbar user={user} />
        <Messages user={user} />
      </div>
    </main>
  );
};

export default Home;
