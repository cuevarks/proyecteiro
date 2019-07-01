import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const StyledTab = withStyles({
  textColorPrimary: {
    color: "white"
  },
  textColorSecondary: {
    color: "#42DA6D"
  }
})(Tab);

const StyledPaper = withStyles({
  root: {
    background: "transparent",
    boxShadow: "none"
  }
})(Paper);

class Nav extends Component {
  render() {
    return (
      <div>
        <StyledPaper className="Tabs">
          <Tabs textColor="secondary" indicatorColor="primary">
            <StyledTab label={<span className="tabsLabel">HOME</span>} />
            <StyledTab label={<span className="tabsLabel">RANDOM</span>} />
            <StyledTab label={<span className="tabsLabel">ABOUT US</span>} />
          </Tabs>
        </StyledPaper>
      </div>
    );
  }
}

export default Nav;
