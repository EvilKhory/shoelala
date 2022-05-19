import React from "react";
import { NavLink } from "react-router-dom";
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'

function Footer() {
  return (
    <div className="footer">
      <h2>SHOE LA LA</h2>
      <hr></hr>
      <div className="footer_row">
        <a href="#">Mentions légales</a>
        <NavLink to="/Contact">
          <a href="">Contact</a>
        </NavLink>
        <ul>
          <li>Suivez-nous :</li>
          <li><a href="https://www.twitter.com" target="_blank"><BsTwitter></BsTwitter></a></li>
          <li><a href="https://www.instagram.com" target="_blank"><BsInstagram></BsInstagram></a></li>
          <li><a href="https://www.facebook.com" target="_blank"><BsFacebook></BsFacebook></a></li>
        </ul>
      </div>
        <p>Tous droits réservés © <strong>Golden Curves</strong> | 2022</p>
    </div>
  );
}

export default Footer;