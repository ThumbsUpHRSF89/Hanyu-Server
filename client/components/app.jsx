import React from 'react';
import '../styles.css';
import ImageView from './imageView/imageView';
import ItemDetailsView from './itemDetailsView/itemDetailsView';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentWillMount() {
    this.getProductInfo(0);
  }

  getProductInfo(id) {
    const url = `/product/${id}`;
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        this.setState({ product: res });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { image_url: images, ...details } = this.state.product;
    if (this.state.product.id === undefined) {
      return <div />;
    }
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
