import React, { Component } from "react";

class AppLogo extends Component {
  render() {
    return (
      <div>
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
