import React from 'react';
import { shallow } from 'enzyme';
import BookingcomSymbol from './';

describe('BookingcomSymbol', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <BookingcomSymbol />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<BookingcomSymbol />)).toMatchSnapshot();
  });
});
