import React from 'react';
import PropTypes from 'prop-types';
import ImageList from './imageList';
import MainImage from './mainImage';

const imageView = ({ images, selected, title }) => (
  <div>
    <ImageList images={images} />
    <MainImage image={images[selected]} title={title} />
  </div>
);

imageView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.number,
  title: PropTypes.string.isRequired,
};

imageView.defaultProps = {
  selected: 0,
};

export default imageView;
