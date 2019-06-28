import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header className="HeaderBackground">
        <div className="HeaderBackground-figure">
          <AppLogo />
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
