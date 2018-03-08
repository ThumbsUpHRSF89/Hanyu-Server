import React from 'react';
import PropTypes from 'prop-types';
import ItemDetailsHeader from './itemDetailsHeader';
import Price from './price';
import Prime from './prime';
import InStock from './inStock';
import DescriptionList from './descriptionList';
import Shipping from './shipping';

const ItemDetailsView = ({ details }) => (
  <div id="midCol" className="item-detail-view">
    <ItemDetailsHeader
      brand={details.brand}
      name={details.name}
      rating={details.rating}
      reviews={details.review}
    />
    <hr />
    <Price price={details.price} shipping={details.shipping} />
    {details.prime && <Prime />}
    <InStock inStock={details.in_stock} />
    <Shipping />
    <DescriptionList descriptions={details.descriptions} />
    <div className="spacing-small">
      <span className="caretnext">›</span>
      <a>
        See more product details
      </a>
    </div>

    <hr />
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
