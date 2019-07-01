import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Nav from "./Nav";
import Button from "./Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const StyledText = withStyles({
  root: {
    color: "#212121",
    fontSize: "2.5em",
    fontFamily: "'Roboto Mono', monospace",
    position: "absolute",
    top: "45%",
    left: "4.9%"
  }
})(Typography);

class Header extends Component {
  render() {
    return (
      <header className="HeaderBackground">
        <div className="HeaderBackground-figure">
          <AppLogo />
          <Nav />
          <StyledText>Catch your best mood</StyledText>
          <Button />
        </div>
      </header>
    );
  }
}

export default Header;
