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
        <a href='https://www.facebook.com/ninesupap'>
          <RiFacebookCircleFill />
        </a>
        <a href='https://www.instagram.com/ninesupap/'>
          <AiFillInstagram />
        </a>
        <a href='https://twitter.com/ninesupap'>
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
