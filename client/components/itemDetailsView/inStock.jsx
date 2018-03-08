import React from 'react';
import PropTypes from 'prop-types';

const InStock = ({ inStock }) => (
  <div>
    {inStock <= 5 &&
    <span className="size-medium color-price">
      {`Only ${inStock} left in stock - order soon.`}
    </span>}
    {inStock > 5 &&
    <span className="size-medium color-success">
      In Stock.
    </span>}
  </div>
);

InStock.propTypes = {
  inStock: PropTypes.number.isRequired,
};

export default InStock;
