import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { fade, withStyles } from "@material-ui/core/styles";
import AppLogo from "./AppLogo";
import escapeRegExp from "escape-string-regexp";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const StyledCard = withStyles({
  root: {
    display: "flex",
    margin: "5px",
    boxShadow: "5px"
  },
  card: {
    maxWidth: 345
  }
})(Card);

class Therapists extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  render() {
    const { classes } = this.props;
    const { query } = this.state;
    let showingPokemon;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingPokemon = this.props.appData.filter(pokemon =>
        match.test(pokemon.name)
      );
    } else {
      showingPokemon = this.props.appData;
    }
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                <AppLogo />
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "Search" }}
                  value={this.state.query}
                  onChange={event => this.updateQuery(event.target.value)}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div style={{ display: "flex" }}>
          {showingPokemon.map(pokemon => (
            <StyledCard>
              <CardContent>
                <Typography>{pokemon.name}</Typography>
              </CardContent>
            </StyledCard>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Therapists);
