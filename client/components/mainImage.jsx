import React from 'react';
import PropTypes from 'prop-types';

const MainImage = ({ image, title }) => (
  <div>
    <img src={image} alt={title} />
  </div>
);

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainImage;
