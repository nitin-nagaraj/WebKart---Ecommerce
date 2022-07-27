import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP ON</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>WebKart</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy;</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us On</h4>
        <a href="http://instagram.com/nnitins">Instagram</a>
        <a href="http://instagram.com/nnitins">Youtube</a>
        <a href="http://instagram.com/nnitins">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
