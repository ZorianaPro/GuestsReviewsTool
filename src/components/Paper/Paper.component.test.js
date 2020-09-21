import React from 'react';
import { shallow } from 'enzyme';
import Paper from './';

describe('Paper', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Paper />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Paper />)).toMatchSnapshot();
  });
});
