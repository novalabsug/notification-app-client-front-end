import react, { useState, useEffect } from "react";

import Navbar from "../partials/Navbar";
import Messages from "../Messages/Messages";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { isUserLoggedIn } from "../middleware/checkLogin";
import { fetchCompanies } from "../../features/Company/companySlice";
import Footer from "../partials/Footer";
import { mainFunc } from "../../custom/custom";

const Home = () => {
  // check user log in
  isUserLoggedIn();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies(user));
    setTimeout(() => {
      mainFunc();
    }, 2000);
  }, [user]);

  return (
    <main id="landing-page">
      <form className="search-form hide-on-large">
        <input type="text" placeholder="search" />
      </form>
      <div className="container">
        <Navbar user={user} />
        <Messages user={user} />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
