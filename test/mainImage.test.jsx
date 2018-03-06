import React from 'react';
import MainImage from '../client/components/imageView/mainImage';
import data from '../client/dummyData';

describe('<MainImage />', () => {
  it('should render an image', () => {
    const image = data.image_url[0];
    const title = data.name;
    const wrapper = shallow(<MainImage image={image} title={title} />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should render an image with correct src and alt', () => {
    const image = data.image_url[0];
    const title = data.name;
    const wrapper = shallow(<MainImage image={image} title={title} />);
    expect(wrapper.find('img').prop('src')).toEqual(image);
    expect(wrapper.find('img').prop('alt')).toEqual(title);
  });
});
