import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SearchIcon from "@material-ui/icons/Search";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import Typography from "@material-ui/core/Typography";
import { fade, withStyles } from "@material-ui/core/styles";
import AppLogo from "./AppLogo";
import escapeRegExp from "escape-string-regexp";
import shuffle from "shuffle-array";
import sortBy from "sort-by";
import ChatIcon from "@material-ui/icons/ChatBubble";
import ChatBox from "./ChatApp";
import CardHeader from "@material-ui/core/CardHeader";

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
  },
  media: {
    height: 150,
    width: 150
  },
  logoPosition: {
    root: {
      position: "absolute",
      left: "5%"
    }
  }
});

const StyledCard = withStyles({
  root: {
    display: "grid",
    margin: "5px",
    boxShadow: "5px",
    justifyContent: "center"
  },
  card: {
    maxWidth: 250
  }
})(Card);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Therapists extends Component {
  state = {
    query: "",
    shufflePokemon: false,
    opened: false,
    pokeName: ""
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
    } else if (this.state.shufflePokemon) {
      showingPokemon = shuffle(this.props.appData);
    } else {
      showingPokemon = this.props.appData;
      showingPokemon.sort(sortBy("name"));
    }
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                <AppLogo className={classes.logoPosition} />
              </Typography>
              <div>
                <IconButton
                  onClick={() => {
                    this.setState({
                      shufflePokemon: !this.state.shufflePokemon
                    });
                  }}
                >
                  <ShuffleIcon color="primary.contrastText" />
                </IconButton>
              </div>
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
        <div className="pokemonlistContainer">
          {showingPokemon.map(pokemon => (
            <div>
              <StyledCard>
                <CardHeader
                  action={
                    <IconButton
                      onClick={() => {
                        this.setState({
                          opened: true,
                          pokeName: capitalizeFirstLetter(pokemon.name)
                        });
                      }}
                    >
                      <ChatIcon />
                    </IconButton>
                  }
                  title={capitalizeFirstLetter(pokemon.name)}
                  titleTypographyProps={{ variant: "h6" }}
                />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.split("/")[pokemon.url.split("/").length - 2]
                  }.png`}
                  title={capitalizeFirstLetter(pokemon.name)}
                />
              </StyledCard>
            </div>
          ))}
        </div>
        <div>
          {this.state.opened ? <ChatBox title={this.state.pokeName} /> : null}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Therapists);
