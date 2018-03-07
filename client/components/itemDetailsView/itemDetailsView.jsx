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
      name={details.name}
      rating={details.rating}
      reviews={details.review}
    />
    <Price price={details.price} shipping={details.shipping} />
    <InStock inStock={details.in_stock} />
    <Shipping />
    <DescriptionList descriptions={details.descriptions} />
  </div>
);

ItemDetailsView.propTypes = {
  details: PropTypes.shape([
    PropTypes.number,
    PropTypes.string,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.number,
    PropTypes.number,
  ]).isRequired,
};

export default ItemDetailsView;
