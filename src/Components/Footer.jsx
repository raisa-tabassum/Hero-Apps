import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../../public/assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 bg-[#001931] text-white">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="/home" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-lg font-bold text-white">HERO.IO</span>
          </Link>
          <a
            className="text-2xl mt-2"
            href="https://github.com/raisa-tabassum"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
      <nav className="grid grid-flow-col gap-4 ">
        <a className="link text-lg link-hover">Contact</a>
        <a className="link text-lg link-hover">About us</a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Hero
          App Ltd.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
