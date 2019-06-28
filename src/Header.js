import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Nav from "./Nav";
import Button from "./Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const StyledText = withStyles({
  root: {
    color: "#2137b1",
    fontSize: "2.5em",
    fontFamily: "Press Start 2P"
  }
})(Typography);

class Header extends Component {
  render() {
    return (
      <header className="HeaderBackground">
        <div className="HeaderBackground-figure">
          <AppLogo />
          <Nav />
          <StyledText>ALIVEVEVEVEV</StyledText>
          <Button />
        </div>
      </header>
    );
  }
}

export default Header;
