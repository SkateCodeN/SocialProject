import React from "react";
import "../css/framework.css";
import "../css/theme.css";

const Footer = () => {

    return (
        <footer className="footer">
        <ul className="footer__menu">
          <li className="footer__menu__item">
            <a href="#privacy" className="button--link">Privacy Policy</a>
          </li>
          <li className="footer__menu__item">
            <a href="#terms" className="button--link">Terms of Service</a>
          </li>
        </ul>
      </footer>
    )
}

export default Footer;

