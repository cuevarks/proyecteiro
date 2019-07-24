import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppLogo from "./AppLogo";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class PokeAppBar extends Component {
  render() {
    return (
      <div position="static" className="navBar">
        <Paper
          className="pokeBar"
          style={{ backgroundColor: "rgba(66, 218, 109, 0.739)" }}
        >
          <Tabs>
            <div className="pokeBarLogo">
              <AppLogo />
            </div>

            <Tab label="Home" href="/" />
            <Tab label="Therapists" href="/therapists" />
            <Tab label="Contact" href="/contact" />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default PokeAppBar;
