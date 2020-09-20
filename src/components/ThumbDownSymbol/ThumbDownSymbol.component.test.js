import React from 'react';
import { shallow } from 'enzyme';
import ThumbDownSymbol from './';

describe('ThumbDownSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <ThumbDownSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<ThumbDownSymbol />)).toMatchSnapshot();
  });
});
