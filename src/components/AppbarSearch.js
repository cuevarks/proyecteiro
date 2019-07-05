import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core";

const styledInputBase = withStyles({
  root: {
    color: "inherit"
  },
  input: {
    transition: "width 2s",
    width: "100%"
  }
})(InputBase);

class AppbarSearch extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap className="searchTitle">
              Therapists
            </Typography>
            <SearchIcon />
            <styledInputBase placeholder="Search..." />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppbarSearch;
