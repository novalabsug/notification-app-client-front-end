import react from "react";
import Navbar from "../partials/Navbar";
import Chats from "../Chats/Chats";
import MainNav from "../partials/MainNav";

const Home = () => {
  return (
    <main id="landing-page">
      <div className="container">
        <Navbar />
        <Chats />
      </div>
    </main>
  );
};

export default Home;
