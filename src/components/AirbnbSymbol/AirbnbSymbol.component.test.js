import React from 'react';
import { shallow } from 'enzyme';
import AirbnbSymbol from './';

describe('AirbnbSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <AirbnbSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<AirbnbSymbol />)).toMatchSnapshot();
  });
});
