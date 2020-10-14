"use strict";

import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

class ClickableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You clicked this.";
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>Button</button>
    );
  }
}

const domContainer = document.querySelector("main");
ReactDOM.render(<ClickableButton />, domContainer);
