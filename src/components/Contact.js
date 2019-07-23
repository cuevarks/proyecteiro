import React, { Component } from "react";
import Nav from "./Nav";
import AppLogo from "./AppLogo";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import MaskedInput from "react-input-mask";

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
  render() {
    const { classes } = this.props;
    return (
      <div className="contactContainer">
        <AppLogo />
        <Nav />
        <Paper>
          <Typography align="center" variant="h1" component="h2" gutterBottom>
            Eeoooo
            <Typography variant="h2" gutterBottom>
              eooo
              <Typography variant="h3" gutterBottom>
                eooo
              </Typography>
            </Typography>
          </Typography>

          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-phone"
            label="Phone number"
            type="text"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows="8"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
