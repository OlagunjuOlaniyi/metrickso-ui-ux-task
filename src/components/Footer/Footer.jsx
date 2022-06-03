import React from "react";
import { social } from "../../data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__PT">
          <p>
            <a href="">Terms of Services</a>
          </p>
          <p>
            <a href="">Privacy Policy</a>
          </p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright 2021 @Peddle Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
