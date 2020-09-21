import React from 'react';
import { shallow } from 'enzyme';
import Loading from './';

describe('Loading', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Loading />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Loading />)).toMatchSnapshot();
  });
});
