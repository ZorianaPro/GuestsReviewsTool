import React from 'react';
import { shallow } from 'enzyme';
import HoliduSymbol from './';

describe('HoliduSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <HoliduSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<HoliduSymbol />)).toMatchSnapshot();
  });
});
