import React, { Component } from "react";
import ChatBot from "ml-react-chatbot";
import axios from "axios";

class ChatApp extends Component {
  state = {
    messages: [],
    steps: []
  };

  componentDidMount() {
    this.getMessages();
  }

  async getMessages() {
    axios
      .get("http://localhost:3000/chat")
      .then(response => {
        const messages = response.data;
        messages.map(message =>
          this.setState({ messages: [...this.state.messages, message.content] })
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  generateSteps(arrayMessages) {
    arrayMessages.forEach();
  }

  render() {
    return (
      <div>
        <ChatBot width="100%" steps={steps} />
      </div>
    );
  }
}

export default ChatApp;
// import React, { Component } from "react";
// import ChatBot from "react-simple-chatbot";
// import "react-chat-widget/lib/styles.css";
// import axios from "axios";

// class App extends Component {
//   componentDidMount() {
//     // this.getMessages();
//   }

//   // "https://pm1.narvii.com/6513/7fecd5befc22ffee6b35c186de92949dfcaf927e_hq.jpg"
//   state = {
//     username: "",
//     chatting: false,
//     message: "",
//     messages: [
//       {
//         id: "0",
//         message: "Welcome to react chatbot!",
//         trigger: "1"
//       },
//       {
//         id: "1",
//         message: "Bye!",
//         end: true
//       }
//     ]
//   };

//   render() {
//     return (
//       <div>
//         <ChatBot steps={this.state.messages} />
//       </div>
//     );
//   }

// }

// export default App;
