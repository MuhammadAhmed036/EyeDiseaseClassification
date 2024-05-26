import React from "react";
import logo from "../../assets/img/landingPage/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="lg:bg-white lg:w-screen lg:h-20 shadow-sm lg:px-16 lg:py-4 flex justify-items-center items-center w-full">
      <img
        src={logo}
        alt="logo"
        className="lg:h-12 lg:pr-3 h-12 pr-4 pl-2 mt-2"
      />
      <h1 className="font-poppins font-bold text-lg lg:text-2xl mt-2 mb-2"> {/* Increased font size */}
        <Link to="/">Eye Spectra</Link>
      </h1>
      <ul className="flex items-center ml-auto lg:w-100 justify-between font-lato font-semibold w-100">
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/about">Articles</Link>
        </li>
        <li className="mx-4">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="mx-4"> {/* Added Tutorials and adjusted spacing */}
          <Link to="/Tutorials">Tutorials</Link>
        </li>
      </ul>

      <button className="bg-primary lg:py-2 lg:px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary py-1 px-2 mr-4"> {/* Increased margin */}
        {location.pathname === "/register" ? (
          <Link to="/">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </button>
    </nav>
  );
}
