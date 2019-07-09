import React, { Component } from "react";
import socketio from "socket.io-client";
import Paper from "@material-ui/core/Paper";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

class App extends Component {
  componentDidMount() {
    addResponseMessage("Char char char char!");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  };

  state = {
    username: "",
    chatting: false,
    message: "",
    messages: [""]
  };

  // componentDidMount() {
  //   this.io.on("NEW_MESSAGE_RECEIVED", payload => {
  //     this.setState({
  //       messages: [...this.state.messages, payload]
  //     });
  //   });
  // }

  // handleNewUserMessage = (newMessage) => {

  // }

  startChatting = () => {
    if (this.state.username) {
      this.setState({ chatting: true });
    }
  };

  setName = event => this.setState({ username: event.target.value });

  // io = socketio("http://localhost");

  sendMessage = () => {
    if (this.state.message) {
      this.state.messages.push({
        message: this.state.message,
        client: "speech-bubble"
      });
      this.setState({ message: "" });
    }
  };

  // sendMessage = () => {
  //   this.setState({
  //     message: ""
  //   });
  //   this.io.emit("NEW_MESSAGE", {
  //     username: this.state.username,
  //     message: this.state.message
  //   });
  // };

  render() {
    return (
      <Widget
        handleNewUserMessage={this.handleNewUserMessage}
        profileAvatar="https://pm1.narvii.com/6513/7fecd5befc22ffee6b35c186de92949dfcaf927e_hq.jpg"
        title="Pokéchat"
        subtitle="Pokétherapists chat space"
      />
    );
  }
}

export default App;
