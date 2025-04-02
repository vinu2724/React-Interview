import React from "react";
import "./Body.css";
import Navbar from "../Navbar/Navbar";

const Body = ({ children }) => {
  return (
    <div className="body">
      <div className="nav">
        <Navbar />
      </div>
      <div className="children">{children} </div>
    </div>
  );
};

export default Body;
