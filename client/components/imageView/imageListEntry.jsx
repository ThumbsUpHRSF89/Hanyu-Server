import React from 'react';
import PropTypes from 'prop-types';

const ImageListEntry = ({
  image,
  index,
  select,
  selected,
}) => {
  function handleHover() {
    select(index);
  }

  return (
    <li>
      <span className={selected ? 'image-list-item image-selected' : 'image-list-item'} onMouseEnter={handleHover} >
        <img src={image} alt="" />
      </span>
    </li>
  );
};

ImageListEntry.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default ImageListEntry;
