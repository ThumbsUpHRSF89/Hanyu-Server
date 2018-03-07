import React from 'react';

export default class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: new Date(Date.now()),
    };
  }

  render() {
    return <div>{this.state.deadline.toString()}</div>;
  }
}
