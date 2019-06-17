import React, { Component } from "react";

class BtnHome extends Component {
  render() {
    console.log(this.props);
    return <button className={this.props.type}>Test</button>;
  }
}

export default BtnHome;
