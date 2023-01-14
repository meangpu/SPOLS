import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        MEANGPU 2023
      </a>

      <div className='footer__socials'>
        <a href='facebook'>
          <RiFacebookCircleFill />
        </a>
        <a href='ig'>
          <AiFillInstagram />
        </a>
        <a href='twitter'>
          <BsTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; meangpu 2023. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
