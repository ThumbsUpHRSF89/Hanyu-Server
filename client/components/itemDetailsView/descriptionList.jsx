import React from 'react';
import PropTypes from 'prop-types';
import DescriptionEntry from './descriptionEntry'

const DescriptionList = ({ descriptions }) => (
  <div>
    <ul>
      {descriptions.map(description =>
        (<DescriptionEntry
          description={description}
        />))}
    </ul>
  </div>
);

export default DescriptionList;
