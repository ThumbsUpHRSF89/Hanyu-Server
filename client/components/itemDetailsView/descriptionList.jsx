import React from 'react';
import PropTypes from 'prop-types';
import DescriptionEntry from './descriptionEntry';

const DescriptionList = ({ descriptions }) => (
  <div>
    <ul className="unordered-list spacing-none">
      {descriptions.map(description =>
        (<DescriptionEntry
          description={description}
        />))}
    </ul>
  </div>
);

DescriptionList.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DescriptionList;
