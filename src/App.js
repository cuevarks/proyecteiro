import React, { Component } from "react";
import Landing from "./components/Landing";
import axios from "axios";
import Therapists from "./components/Therapists";
import ChatApp from "./components/ChatApp";
import Contact from "./components/Contact";
import themePalette from "../src/styles/themePalette";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    appData: []
  };

  componentDidMount() {
    axios
      .get("http://pokeapi.co/api/v2/pokemon/?limit=151")
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
    const theme = createMuiTheme(themePalette);
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
            <Route path="/contact" component={Contact} />
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
