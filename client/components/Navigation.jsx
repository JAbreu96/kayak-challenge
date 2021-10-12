import React from "react";
import kayakLogo from "../assets/Logo.svg";

const Navigation = (props) => {
  return (
    <section className="nav">
      <a href="/">
        <img src={kayakLogo} alt="kayak" className="nav_logo" />

      </a>
    </section>
  );
};

export default Navigation;
