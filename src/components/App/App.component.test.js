import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, shallow } from 'enzyme';
import App from './';

describe('App', () => {
  it('renders without crashing', () => {
    expect(
      shallow.bind(
        shallow,
        <Router>
          <App />
        </Router>
      )
    ).not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(
      render(
        <Router>
          <App />
        </Router>
      )
    ).toMatchSnapshot();
  });
});
