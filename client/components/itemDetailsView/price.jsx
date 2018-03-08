import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price, shipping }) => (
  <div id="price">
    <table>
      <tr>
        <td className="size-base color-secondary">
          Price:
        </td>
        <td>
          <span className="size-medium color-price">{`$${price}`}</span>
          <span className="size-base color-base">
            &nbsp;&&nbsp;
            <b>FREE Shipping</b>
            {shipping !== 0 && ' on orders over $25.'}
          </span>
        </td>
      </tr>
    </table>
  </div>
);

Price.propTypes = {
  price: PropTypes.number.isRequired,
  shipping: PropTypes.number.isRequired,
};

export default Price;
