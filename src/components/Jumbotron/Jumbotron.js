import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="directions">Scroll Down to Start the Game!</h1>
        <h3 className="directions2">Click on an image to began, but make sure not to click on the same image twice.</h3>
        {/* <p className="lead">Click on an image to earn points, but don't click on any more than once!</p> */}
      </div>
    </div>
  
);
export default Jumbotron;