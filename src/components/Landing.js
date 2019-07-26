import React, { Component } from "react";
import AppLogo from "./AppLogo";
import Nav from "./Nav";
import Typography from "@material-ui/core/Typography";
import LandingTextButton from "./LandingTextButton";
import { Paper } from "@material-ui/core";

class Landing extends Component {
  render() {
    return (
      <header className="HeaderBackground">
        <div className="wrapper">
          <Nav className="navBar" />
          <div className="HeaderBackground-figure">
            <AppLogo />
            <LandingTextButton />
          </div>
          <Paper
            className="paperText"
            style={{ backgroundColor: "rgba(66, 218, 109)" }}
          >
            {" "}
            <Typography variant="h3" gutterBottom>
              Being present is all about connection.
            </Typography>{" "}
            <br />
            <Typography variant="h6" gutterBottom>
              Interact with pokémon to help you stop thinking that much and
              connect with the present.
            </Typography>
          </Paper>
        </div>
      </header>
    );
  }
}

export default Landing;
