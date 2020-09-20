import React from 'react';
import { shallow } from 'enzyme';
import HoliduSVG from './';

describe('HoliduSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <HoliduSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<HoliduSVG />)).toMatchSnapshot();
  });
});
