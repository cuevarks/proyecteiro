import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/styles";

class Therapists extends Component {
  render() {
    return (
      <List>
        {this.props.appData.map(pokemon => (
          <Link href={pokemon.url}>
            <ListItemText>{pokemon.name}</ListItemText>
          </Link>
        ))}
      </List>
    );
  }
}

export default Therapists;
