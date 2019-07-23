import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

class Nav extends Component {
  render() {
    return (
      <div position="static" className="navBar">
        <Paper style={{ backgroundColor: "rgba(66, 218, 109, 0.739)" }}>
          <Tabs variant="fullWidth">
            <Tab label="Home" href="/" />
            <Tab label="Therapists" href="/therapists" />
            <Tab label="Contact" href="/contact" />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default Nav;
