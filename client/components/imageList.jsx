import React from 'react';
import PropTypes from 'prop-types';
import ImageListEntry from './imageListEntry';

const ImageList = ({ images }) => (
  <div>
    <ul>
      {images.map(image => <ImageListEntry image={image} />)}
    </ul>
  </div>
);

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageList;
