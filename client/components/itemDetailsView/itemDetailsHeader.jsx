import React from 'react';
import PropTypes from 'prop-types';

const itemDetailsHeader = ({ name, rating, reviews }) => (
  <div>
    <div>{name}</div>
    <div>{rating}</div>
    <div>{reviews}</div>
  </div>
);

export default itemDetailsHeader;
