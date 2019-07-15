import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Nav from "./Nav";
import LandingTextButton from "./LandingTextButton";

class Landing extends Component {
  render() {
    return (
      <header className="HeaderBackground">
        <div className="wrapper">
          <Nav />
          <div className="HeaderBackground-figure">
            <AppLogo />
            <LandingTextButton />
          </div>
        </div>
      </header>
    );
  }
}

export default Landing;
