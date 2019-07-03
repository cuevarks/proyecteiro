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
  state = {
    currentData: null,
    name: "",
    sprite: "",
    url: "",
    description: ""
  };

  fetchInfo(URI) {
    const fetchDataPromise = new Promise(async function(successful, rejected) {
      await axios
        .get(URI)
        .then(response => {
          const data = response.data.results;
          this.setState({
            currentData: data
          });
          successful(this.state.currentData);
        })
        .catch(error => {
          console.error(error);
          rejected(error);
        });
    });
  }

  render() {
    return (
      <div>
        {this.fetchInfo("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            response(console.log(response.successful));
          })
          .catch(error => {
            console.log(error.rejected);
          })}
        {this.state.currentData ? <h1>ponisalvaje</h1> : <CircularProgress />}
      </div>
    );
    // <div>
    //   {this.props.map(pokemon => (
    //     <cardStyles>
    //       <CardActionArea>
    //         {console.log("working")}
    //         {console.log(this.fetchInfo("https://pokeapi.co/api/v2/pokemon"))}
    //         <mediaStyles
    //           image={this.props["url"]}
    //           title={this.props["name"]}
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             {this.props["name"]}
    //           </Typography>
    //           <Typography variant="body2" color="textSecondary" component="p">
    //             {this.props["url"]}
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //           Share
    //         </Button>
    //         <Button size="small" color="primary">
    //           Learn More
    //         </Button>
    //       </CardActions>
    //     </cardStyles>
    //   ))}
    // </div>
  }
}

export default Therapists;
