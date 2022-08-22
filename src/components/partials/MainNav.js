import react from "react";

const MainNav = () => {
  return (
    <nav className="main-nav flx jc-btn">
      <div className="holder logo">
        <a href="/">LOGO</a>
      </div>
      <form className="search-form">
        <input type="text" placeholder="search" />
      </form>
      <div className="side-nav flx jc-end">
        <a href="/signup" className="btn">
          Register
        </a>
        <a href="/signin" className="btn">
          Login
        </a>
      </div>
    </nav>
  );
};

export default MainNav;
