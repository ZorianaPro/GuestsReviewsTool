import React from 'react';
import { shallow } from 'enzyme';
import BookingcomSVG from './';

describe('BookingcomSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <BookingcomSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<BookingcomSVG />)).toMatchSnapshot();
  });
});
