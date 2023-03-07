import React from "react";
import { NavLink } from "react-router-dom";
import "./LeftSideBar.css";
import Globe from "../../assests/globe.png";

const LeftSideBar = () => {
  return (
    <div className="leftside-bar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeclassName="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            {" "}
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeClassName="active"
          >
            <img src={Globe} alt="globe" width='20px'/>
            <p>Questions</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeclassName="active"
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeclassName="active"
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
