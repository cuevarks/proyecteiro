import React, { Component } from "react";

class AppLogo extends Component {
  render() {
    return (
      <div className="mainLogo">
        <a href="/" style={{ textDecoration: "none" }}>
          <div className="AppHeader">
            <img
              src="icons/pokeball.svg"
              alt="Pokeball Logo"
              className="AppLogoIcon"
            />
            <h1 className="AppLogoText" style={{ color: "black" }}>
              POKÉTHERAPY
            </h1>
          </div>
        </a>
      </div>
    );
  }
}

export default AppLogo;
