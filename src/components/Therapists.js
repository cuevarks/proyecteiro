import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import SearchAppBar from "./AppbarTest";

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
  render() {
    return (
      <div>
        <SearchAppBar />
        <div style={{ display: "flex" }}>
          {this.props.appData.map(pokemon => (
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

export default Therapists;
