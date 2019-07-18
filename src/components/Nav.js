import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div position="static" className="navBar">
        <Paper style={{ backgroundColor: "rgba(66, 218, 109, 0.739)" }}>
          <Tabs>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <Tab label="Home" />
            </Link>
            <Link
              to="/therapists"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <Tab label="Therapists" />
            </Link>
            <Link to="/chat" style={{ textDecoration: "none", color: "#000" }}>
              <Tab label="Chat" />
            </Link>
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default Nav;
