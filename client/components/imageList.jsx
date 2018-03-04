import React from 'react';
import PropTypes from 'prop-types';
import ImageListEntry from './imageListEntry';

const ImageList = ({ images, select, selected }) => (
  <div className="image-list" >
    <ul>
      {images.map((image, index) =>
        (<ImageListEntry
          image={image}
          index={index}
          select={select}
          selected={index === selected}
        />))}
    </ul>
  </div>
);

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default ImageList;
