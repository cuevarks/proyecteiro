import React, { Component } from "react";
import Header from "./components/Header";
import axios from "axios";
import Therapists from "./components/Therapists";
import ChatApp from "./components/ChatApp";
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
    return (
      <div>
        <Header />
        <ChatApp />
      </div>
    );
  }
}

export default App;
