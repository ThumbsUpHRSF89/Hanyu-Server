import React from 'react';
import PropTypes from 'prop-types';
import Rating from './rating';

const ItemDetailsHeader = props => (
  <div>
    <div>
      <a href="#">{props.brand}</a>
    </div>
    <div className="title-section">
      <h1 id="title">{props.name}</h1>
    </div>
    <div className="review-section">
      <Rating rating={props.rating} />
      <a className="reviews" href="#">{props.reviews} customer reviews</a>
    </div>
  </div>
);

ItemDetailsHeader.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default ItemDetailsHeader;
