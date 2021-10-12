import React, { useState, useEffect } from 'react';
import kayakLogo from '../assets/Logo.svg';

const Navigation = (props) => {

  return (
    <section className="nav">
      <a href="/">
        <img src={kayakLogo} className="nav_logo" />
      </a>
    </section>
  )
}

export default Navigation;