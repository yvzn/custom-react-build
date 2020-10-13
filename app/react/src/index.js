'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class ClickableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You clicked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Button'
    );
  }
}

const domContainer = document.querySelector('main');
ReactDOM.render(e(ClickableButton), domContainer);
