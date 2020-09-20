import React from 'react';
import { shallow } from 'enzyme';
import AppStoreIconSVG from './';

describe('AppStoreIconSVG', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <AppStoreIconSVG />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<AppStoreIconSVG />)).toMatchSnapshot();
  });
});
