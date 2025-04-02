import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
  return (
    <>
      <div className="outerNav">
        <div className="logo">
          <p>Profile</p>
          <img src=""></img>
        </div>
        <div className="Searchbar">
          <SearchBar />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Profile"> Profile</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>{" "}
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
