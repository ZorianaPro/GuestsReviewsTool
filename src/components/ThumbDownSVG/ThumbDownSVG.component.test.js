import React from 'react';
import { shallow } from 'enzyme';
import ThumbDownSVG from './';

describe('ThumbDownSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <ThumbDownSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<ThumbDownSVG />)).toMatchSnapshot();
  });
});
