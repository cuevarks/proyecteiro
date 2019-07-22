import React, { Component } from "react";
import axios from "axios";
import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";
import shuffle from "shuffle-array";
import CircularProgress from "@material-ui/core/CircularProgress";

import "react-chat-widget/lib/styles.css";

class ChatBox extends Component {
  state = {
    messages: [],
    sending: {}
  };

  componentDidMount() {
    toggleWidget();
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
    let randomTime = Math.floor(Math.random() * 4000 + 3000);
    let random = Math.floor(Math.random() * 7 + 1);
    let messsage = this.state.messages[random];
    let sendingObject = { content: newMessage };

    setTimeout(function() {
      axios
        .post("http://localhost:3000/chat/postmessages", sendingObject)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
      addResponseMessage(messsage);
    }, randomTime);
  };

  render() {
    if (this.state.messages.length > 0) {
      return (
        <div>
          <Widget
            profileAvatar="https://pm1.narvii.com/6513/7fecd5befc22ffee6b35c186de92949dfcaf927e_hq.jpg"
            title="Charmander"
            subtitle="Pokéchat"
            handleNewUserMessage={this.handleNewUserMessage}
            fullScreenMode
          />
        </div>
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
