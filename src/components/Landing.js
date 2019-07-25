import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Nav from "./Nav";
import LandingTextButton from "./LandingTextButton";
import { Paper } from "@material-ui/core";

class Landing extends Component {
  render() {
    return (
      <header className="HeaderBackground">
        <div className="wrapper">
          <Nav className="navBar" />
          <div className="HeaderBackground-figure">
            <AppLogo />
            <LandingTextButton />
          </div>
          <Paper className="paperText" />
        </div>
      </header>
    );
  }
}

export default Landing;
