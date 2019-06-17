import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Button from "./Button";

class Header extends Component {
  state = {
    mode: "visible"
  };

  render() {
    return (
      <header className="HeaderBackground">
        <div className="HeaderBackground-figure" />
        <AppLogo />
        <nav>
          <ul>
            <li>
              <Button type="BtnNav" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
