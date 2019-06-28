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

class Nav extends Component {
  render() {
    return (
      <div>
        <Paper className="Tabs">
          <Tabs textColor="secondary" indicatorColor="primary">
            <StyledTab label={<span className="tabsLabel">HOME</span>} />
            <StyledTab label={<span className="tabsLabel">RANDOM</span>} />
            <StyledTab label={<span className="tabsLabel">ABOUT US</span>} />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default Nav;
