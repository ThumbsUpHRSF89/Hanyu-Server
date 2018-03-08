import React from 'react';
import product from '../dummyData';
import ImageView from './imageView/imageView';
import ItemDetailsView from './itemDetailsView/itemDetailsView';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product,
    };
  }

  render() {
    const { image_url: images, ...details } = this.state.product;
    return (
      <div id="item-detail-module">
        <ImageView
          images={images}
          title={details.name}
        />
        <ItemDetailsView details={details} />
      </div>
    );
  }
}
