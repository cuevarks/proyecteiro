import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Nav from "./Nav";
import LandingTextButton from "./LandingTextButton";

class Header extends Component {
  render() {
    return (
      <header className="HeaderBackground">
        <div className="wrapper">
          <div className="HeaderBackground-figure">
            <AppLogo />
            <Nav />
            <LandingTextButton />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
