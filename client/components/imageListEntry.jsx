import React from 'react';
import PropTypes from 'prop-types';

const ImageListEntry = ({ image }) => (
  <li>
    <span className="image-list-item" >
      <img src={image} alt="" />
    </span>
  </li>
);

ImageListEntry.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageListEntry;
