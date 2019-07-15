import React, { Component } from "react";
import Landing from "./components/Landing";
import axios from "axios";
import Therapists from "./components/Therapists";
import ChatApp from "./components/ChatApp";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import BtnHome from "./BtnHome";

class App extends Component {
  state = {
    appData: []
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        const appData = response.data.results;
        this.setState({
          appData
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { appData } = this.state;
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: "#7fff9e",
          main: "#44da6e",
          dark: "#00a740",
          contrastText: "#000000"
        },
        secondary: {
          light: "#198036",
          main: "#52b062",
          dark: "#00520a",
          contrastText: "#ffffff"
        }
      },
      status: {
        danger: "red"
      }
    });
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Route
              path="/"
              exact
              render={() => (
                <MuiThemeProvider theme={theme}>
                  <Landing />
                </MuiThemeProvider>
              )}
            />
            <Route
              path="/therapists"
              render={props => <Therapists {...props} appData={appData} />}
            />
            <Route path="/chat" component={ChatApp} />
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
