import React from 'react';
import PropTypes from 'prop-types';

const ImageListEntry = ({ image }) => (
  <li>
    <img src={image} alt="" />
  </li>
);

ImageListEntry.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageListEntry;
