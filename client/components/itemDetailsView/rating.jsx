import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  let className;
  switch (rating) {
    case 0:
      className = 'star-0';
      break;
    case 0.5:
      className = 'star-0-5';
      break;
    case 1:
      className = 'star-1';
      break;
    case 1.5:
      className = 'star-1-5';
      break;
    case 2:
      className = 'star-2';
      break;
    case 2.5:
      className = 'star-2-5';
      break;
    case 3:
      className = 'star-3';
      break;
    case 3.5:
      className = 'star-3-5';
      break;
    case 4:
      className = 'star-4';
      break;
    case 4.5:
      className = 'star-4-5';
      break;
    case 5:
      className = 'star-5';
      break;
    default:
      className = '';
  }
  return (
    <div className="rating">
      <div className={`icon icon-star ${className}`} />
      <div className="icon icon-popover" />
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
