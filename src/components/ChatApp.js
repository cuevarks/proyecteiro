import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import "../styles/chatbox.css";

class ChatApp extends Component {
  state = {
    username: "",
    chatting: false,
    message: "",
    messages: []
  };
  render() {
    return (
      <div className="chatApp">
        {/* !this.state.chatting ?
          <div className="userName">
         <TextField value={} onChange={} placeholder="Enter your username" type="text" />
            <IconButton onClick={} color="secondary">Go!</IconButton>
        </div> : */}

        <div className="chatBox">
          <ul className="messages">
            {/* {this.state.messages.map(message => <li><b>{message.username}</b>  {message.message}</li>)} */}
          </ul>
          <div className="chatMessage">
            <TextField placeholder="Send a message ...." type="text" />
            <IconButton color="secondary">Go!</IconButton>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;
