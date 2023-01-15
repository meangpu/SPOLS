import React from "react";
import logo from "../../img/icon.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <div className='container nav__container'>
        <a to='/' className='logo '>
          <img width='64' height='64' src={logo} alt='meangpu website' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
