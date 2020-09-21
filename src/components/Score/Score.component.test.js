import React from 'react';
import { shallow, mount } from 'enzyme';
import Score from './';

describe('Score', () => {
  it('renders without crashing', () => {
    expect(
      shallow.bind(
        shallow,
        <Score/>
      ))
      .not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(
      mount(
        <Score />
      )
    ).toMatchSnapshot();
  });
});
