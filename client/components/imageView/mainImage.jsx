import React from 'react';
import PropTypes from 'prop-types';

function getCurserPos(img, e = window.event) {
  let x = 0;
  let y = 0;
  /* get the x and y positions of the image: */
  const a = img.getBoundingClientRect();
  /* calculate the cursor's x and y coordinates, relative to the image: */
  x = e.pageX - a.left;
  y = e.pageY - a.top;
  /* consider any page scrolling: */
  x -= window.pageXOffset;
  y -= window.pageYOffset;
  return { x, y };
}

function handleMouseMove(e) {
  const img = document.getElementById('landingImage');
  const lens = document.getElementById('zoomLens');
  const output = document.getElementById('magnifyLens');
  const pos = getCurserPos(img, e);
  if (lens) {
    let x = pos.x - (lens.offsetWidth / 2);
    let y = pos.y - (lens.offsetHeight / 2);

    if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
    if (x < 0) { x = 0; }
    if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
    if (y < 0) { y = 0; }

    const parentDivPos = img.parentNode.getBoundingClientRect();
    const imgPos = img.getBoundingClientRect();
    const offsetX = parentDivPos.x - imgPos.x;
    const offsetY = parentDivPos.y - imgPos.y;

    lens.style.left = `${x - offsetX}px`;
    lens.style.top = `${y - offsetY}px`;

    const cx = output.offsetWidth / lens.offsetWidth;
    const cy = output.offsetHeight / lens.offsetHeight;
    output.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  }
}

export default class MainImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magnify: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ magnify: true }, () => {
      const img = document.getElementById('landingImage');
      const output = document.getElementById('magnifyLens');
      /* Create Lens: */
      const lens = document.createElement('div');
      lens.setAttribute('id', 'zoomLens');
      lens.addEventListener('mousemove', handleMouseMove);
      /* Make lens a DOM element: */
      img.parentElement.appendChild(lens);
      /* Calculate ratio between output div and lens: */
      const cx = output.offsetWidth / lens.offsetWidth;
      const cy = output.offsetHeight / lens.offsetHeight;
      /* Set background properties for the output DIV: */
      output.style.backgroundImage = `url(${img.src})`;
      output.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
    });
  }

  handleMouseLeave() {
    this.setState({ magnify: false });
    const lens = document.getElementById('zoomLens');
    if (lens) { lens.parentNode.removeChild(lens); }
  }

  render() {
    return (
      <div className="main-product-display" >
        <div className="main-image-wrapper" >
          <div
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <img
              id="landingImage"
              className="main-product-image"
              src={this.props.image}
              alt={this.props.title}
            />
          </div>
          <span id="canvasCaption">Roll over image to zoom in</span>
        </div>
        {this.state.magnify && <div id="magnifyLens" />}
      </div>
    );
  }
}

MainImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
