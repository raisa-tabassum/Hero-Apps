import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../public/assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar flex flex-col md:flex-row bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10" />
          <span className="text-lg font-bold text-[#632EE3]">HERO.IO</span>
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <NavLink to='/' className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/apps' className={({isActive}) => (isActive ? "active" : "")}>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/installation' className={({isActive}) => (isActive ? "active" : "")}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/raisa-tabassum"
          target="_blank"
          className="btn rounded-lg text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
