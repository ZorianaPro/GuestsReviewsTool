import React from 'react';
import { shallow } from 'enzyme';
import ThumbUpSymbol from './';

describe('ThumbUpSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <ThumbUpSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<ThumbUpSymbol />)).toMatchSnapshot();
  });
});
