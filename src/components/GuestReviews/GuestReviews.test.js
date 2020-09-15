import React from 'react';
import { render, shallow } from 'enzyme';
import GuestReviews from './';

describe('GuestReviews', () => {
  it('renders without crashing', () => {
    expect(
      shallow.bind(
        shallow,
        <GuestReviews />
      )
    ).not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(
      render(
        <GuestReviews />
      )
    ).toMatchSnapshot();
  });
});