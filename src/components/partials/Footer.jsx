import React from "react";

const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="hide-on-large">
      <p className="center-align">Copyright &copy; {currentYear()}</p>
    </footer>
  );
};

export default Footer;
