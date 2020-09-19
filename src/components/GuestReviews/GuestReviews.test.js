import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import GuestReviews from './';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const initialState = {
  reviews: {}
};

describe('GuestReviews', () => {
  let store;

  beforeAll(() => {
    store = mockStore(initialState);
  });

  it('renders without crashing', () => {
    expect(
      shallow.bind(
        shallow,
        <Provider store={ store }>
          <GuestReviews />
        </Provider>
      )
    )
      .not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(
      mount(
        <Provider store={ store }>
          <GuestReviews />
        </Provider>
      )
    ).toMatchSnapshot();
  });

  // describe('if there are still something to load next time', () => {
  //
  // });
  // describe('if there is nothing left to load next time', () => {
  //
  // });
});
