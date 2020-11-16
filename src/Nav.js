import React from "react";
import "./Nav.css";
import { useState, useEffect } from 'react';

function Nav(){

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
    if (window.scrollY > 50 ){
      handleShow(true);
    } else handleShow(false);
  });

  return () => {
    window.removeEventListener("scroll");
  };

}, []);

  return(

    <div className="nav--fadeBottom">

    <div className={`nav ${show && "nav__black"}`}>
    <img
    className="nav__logo"
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    alt="Netflix"
    />

    <h2 className="navLinksHome"> Home</h2>
    <h2 className="navLinks"> Series</h2>
    </div>

    </div>

  )
}

export default Nav
