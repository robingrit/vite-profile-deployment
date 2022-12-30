import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";

//Function for changing navstate when clicking any header link

function NavBar({ updateNavState, navstate }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  function swapTab({ target }) {
    updateNavState(target.innerText);
  }

  return (
    <header>
      <nav ref={navRef}>
        <a
          {...(navstate == "Home" && { id: "nav_active" })}
          onClick={(event) => {
            swapTab(event);
            showNavbar();
          }}
        >
          Home
        </a>
        <a
          {...(navstate == "Projects" && { id: "nav_active" })}
          onClick={(event) => {
            swapTab(event);
            showNavbar();
          }}
        >
          My Project
        </a>
        <a
          {...(navstate == "Home" && { id: "nav_active" })}
          onClick={(event) => {
            swapTab(event);
            showNavbar();
          }}
        >
          Skills
        </a>
        <a
          {...(navstate == "About" && { id: "nav_active" })}
          onClick={(event) => {
            swapTab(event);
            showNavbar();
          }}
        >
          About
        </a>

        <button className="nav-btn close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
