import React from 'react';
import PropTypes from 'prop-types';

const MainImage = ({ image, title }) => (
  <div className="main-product-display" >
    <img className="main-product-image" src={image} alt={title} />
  </div>
);

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainImage;
