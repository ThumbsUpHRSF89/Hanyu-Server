import React from 'react';
import PropTypes from 'prop-types';

const InStock = ({ inStock }) => (
  <div>
    <span className="size-medium color-price">
      {`Only ${inStock} left in stock - order soon.`}
    </span>
    <span></span>
  </div>
);

export default InStock;
