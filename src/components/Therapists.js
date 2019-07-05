import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const mediaStyles = withStyles({
  media: {
    height: 140
  }
})(CardMedia);

const cardStyles = withStyles({
  card: {
    maxWidth: 345
  }
})(Card);

class Therapists extends Component {
  fetchInfo(URI) {
    return new Promise(resolve => {
      axios
        .get(URI)
        .then(response => {
          const data = response.data.results;
          resolve(data);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }

  // showData(apiDataNames, ) {
  //   <div>
  //     {apiData.map(pokemon => (
  //       <cardStyles>
  //         <CardActionArea>
  //           {console.log(apiData)}
  //           <mediaStyles image={} title={} />
  //           <CardContent>
  //             <Typography gutterBottom variant="h5" component="h2">
  //               {}
  //             </Typography>
  //             <Typography variant="body2" color="textSecondary" component="p">
  //               {}
  //             </Typography>
  //           </CardContent>
  //         </CardActionArea>
  //         <CardActions>
  //           <Button size="small" color="primary">
  //             Share
  //           </Button>
  //           <Button size="small" color="primary">
  //             Learn More
  //           </Button>
  //         </CardActions>
  //       </cardStyles>
  //     ))}
  //   </div>;
  // }

  render() {
    return (
      <div>
        {this.fetchInfo("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            let pokemonName = response.name;
            let pokemonImg = null;
            let pokemonDescription = null;
            response.map(
              pokemon => (
                (pokemonName = pokemon.name),
                this.fetchInfo(pokemon.url).then(result => {
                  let pokemonImg = result.sprites.front_default;
                  this.fetchInfo(result.species.url).then(resultSpecies => {
                    let pokemonDescription =
                      resultSpecies.flavor_text_entries[1].flavor_text;
                  });
                })
              )
            );
          })
          .catch(error => {
            console.log(error);
          })}
      </div>
    );
  }
}

export default Therapists;
