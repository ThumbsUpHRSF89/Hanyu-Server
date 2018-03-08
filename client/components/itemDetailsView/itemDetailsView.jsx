import React from 'react';
import PropTypes from 'prop-types';
import ItemDetailsHeader from './itemDetailsHeader';
import Price from './price';
import InStock from './inStock';
import DescriptionList from './descriptionList';
import Shipping from './shipping';

const ItemDetailsView = ({ details }) => (
  <div className="item-detail-view">
    <ItemDetailsHeader
      brand={details.brand}
      name={details.name}
      rating={details.rating}
      reviews={details.review}
    />
    <hr />
    <Price price={details.price} shipping={details.shipping} />
    <InStock inStock={details.in_stock} />
    <Shipping />
    <DescriptionList descriptions={details.descriptions} />
  </div>
);

ItemDetailsView.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    category: PropTypes.string,
    name: PropTypes.string,
    descriptions: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    shipping: PropTypes.number,
    prime: PropTypes.bool,
    in_stock: PropTypes.number,
    rating: PropTypes.number,
    review: PropTypes.number,
  }).isRequired,
};

export default ItemDetailsView;
