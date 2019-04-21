import React from "react";
import "./Navbar.css";

const Navbar = props => (
  
    <nav className="fixed-top">
      <div className="title">{props.children}</div>
      <div className="header">{props.message}</div>
      <div className="score">Score: {props.score} | Top Score: {props.topscore}</div>
    </nav>
  
);

export default Navbar;