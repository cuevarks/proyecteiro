import React, { Component } from "react";

class AppLogo extends Component {
  render() {
    return (
      <div className="mainLogo">
        <div className="AppHeader">
          <img
            src="icons/pokeball.svg"
            alt="Pokeball Logo"
            className="AppLogoIcon"
          />
          <h1 className="AppLogoText">POKÉTHERAPY</h1>
        </div>
      </div>
    );
  }
}

export default AppLogo;
