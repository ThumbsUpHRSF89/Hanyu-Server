import React from 'react';
import PropTypes from 'prop-types';

const DescriptionEntry = ({ description }) => (
  <li>
    <span className="list-item">
      {description}
    </span>
  </li>
);

DescriptionEntry.propTypes = {
  description: PropTypes.string.isRequired,
};

export default DescriptionEntry;
