import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import PokeAppBar from ".//PokeAppBar";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
});

class Contact extends Component {
  state = {
    form: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="grid-container">
        <PokeAppBar className="navBar" />
        <Card
          style={{ backgroundColor: "rgba(66, 218, 109, 0.739)" }}
          className="contactTitle"
        >
          <CardContent>
            <Typography align="center" variant="h3" component="h2" gutterBottom>
              Contact us
              <Typography gutterBottom>
                All of our pokémon will be more than happy to asist you!
              </Typography>
            </Typography>
          </CardContent>
        </Card>
        <Card className="contactInfo">
          <CardContent className="contactContent">
            <form>
              <div>
                <TextField
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  style={{ width: "97.6%" }}
                />
                <div>
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    style={{ width: "55%" }}
                  />
                  <TextField
                    id="outlined-phone"
                    label="Phone number"
                    type="text"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    style={{ width: "40.6%" }}
                  />
                </div>
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows="17"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  style={{ width: "97.6%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "1.4%",
                  paddingLeft: "1%",
                  paddingTop: "2%"
                }}
              >
                <Button fullWidth variant="contained" color="primary">
                  Send
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
