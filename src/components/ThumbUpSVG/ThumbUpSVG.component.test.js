import React from 'react';
import { shallow } from 'enzyme';
import ThumbUpSVG from './';

describe('ThumbUpSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <ThumbUpSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<ThumbUpSVG />)).toMatchSnapshot();
  });
});
