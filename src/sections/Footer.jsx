import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit My Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((social) => (
            <a  href={social.url} target="_blank" key={social.name}>
              <social.icon /> {/* Render the icon dynamically */}
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            ©️{new Date().getFullYear()} Rabiul | Hasan. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
