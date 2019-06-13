import React, { Component } from "react";

class Header extends Component {
  state = {
    mode: "visible"
  };

  render() {
    return (
      <div className="AppHeader">
        <nav>
          <h1 className="AppLogo"> fgd</h1>
        </nav>
      </div>
    );
  }
}

export default Header;
