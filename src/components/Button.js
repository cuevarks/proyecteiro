import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const StyledButton = withStyles({
  root: {
    borderRadius: 25,
    background: "#d50000d3",
    "&:hover": {
      background: "#dd3333"
    },
    display: "flex"
  },
  containedSecondary: {
    color: "#ffffff"
  },
  sizeLarge: {
    size: "600px"
  }
})(Button);

class BtnHome extends Component {
  render() {
    return (
      <StyledButton size="large" variant="contained" color="secondary">
        Try it now!
      </StyledButton>
    );
  }
}

export default BtnHome;
