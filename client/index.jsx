import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.component {
  constructor() {
    super();
    this.state = {
      hello: 'world',
    };
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
