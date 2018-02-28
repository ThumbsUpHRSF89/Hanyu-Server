import React from 'react';
import ReactDOM from 'react-dom';
import product from './dummyData';
import ImageView from './components/imageView';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product,
    };
  }

  render() {
    return (
      <div>
        <ImageView
          images={this.state.product.image_url}
          title={this.state.product.name}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
