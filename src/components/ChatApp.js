import React, { Component } from "react";
import axios from "axios";
import { Widget, addResponseMessage } from "react-chat-widget";
import shuffle from "shuffle-array";
import CircularProgress from "@material-ui/core/CircularProgress";

import "react-chat-widget/lib/styles.css";

class ChatBox extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/chat")
      .then(response => {
        const messages = response.data;
        this.setState({ messages: shuffle(messages.map(this.mapMessage)) });
      })
      .catch(error => {
        console.error(error);
      });

    addResponseMessage(
      "I'm Charmander, your current Pokétherapist. Hopefully you'll laugh a bit with some of my words. Everyone deserves to be happy!"
    );
  }

  mapMessage(item) {
    let messages = item.content;
    return messages;
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    let random = Math.floor(Math.random() * 7 + 1);
    addResponseMessage(this.state.messages[random]);
  };

  render() {
    if (this.state.messages.length > 0) {
      return (
        console.log(this.state.messages),
        (
          <div>
            <Widget
              profileAvatar="https://pm1.narvii.com/6513/7fecd5befc22ffee6b35c186de92949dfcaf927e_hq.jpg"
              title="Charmander"
              subtitle="Pokéchat"
              handleNewUserMessage={this.handleNewUserMessage}
            />
          </div>
        )
      );
    } else {
      return (
        <div>
          <CircularProgress color="primary" />
        </div>
      );
    }
  }
}

export default ChatBox;
