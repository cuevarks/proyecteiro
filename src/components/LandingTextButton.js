import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import Button from "./Button";

const StyledText = withStyles({
  root: {
    color: "#212121",
    fontSize: "2.5em",
    fontFamily: "'Roboto Mono', monospace"
  }
})(Typography);

class LandingTextButton extends Component {
  render() {
    return (
      <div className="LandingText">
        <StyledText>Catch your best mood</StyledText>
        <div className="LandingText">
          <a style={{ textDecoration: "none" }} href="/therapists">
            {" "}
            <Button fullWdith />
          </a>{" "}
        </div>
      </div>
    );
  }
}

export default LandingTextButton;
