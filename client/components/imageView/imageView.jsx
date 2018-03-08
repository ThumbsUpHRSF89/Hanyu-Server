import React from 'react';
import PropTypes from 'prop-types';
import ImageList from './imageList';
import MainImage from './mainImage';

export default class imageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
    };

    this.selectImage = this.selectImage.bind(this);
  }
  selectImage(index) {
    this.setState({ select: index });
  }
  render() {
    return (
      <div id="leftCol" className="image-view">
        <ImageList
          images={this.props.images}
          select={this.selectImage}
          selected={this.state.select}
        />
        <MainImage image={this.props.images[this.state.select]} title={this.props.title} />
      </div>
    );
  }
}

imageView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
