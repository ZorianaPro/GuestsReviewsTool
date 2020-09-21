import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from './';

describe('Reviews', () => {
  it('renders without crashing', () => {
    expect(
      shallow.bind(
        shallow,
        <Reviews/>
      ))
      .not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(
      mount(
        <Reviews />
      )
    ).toMatchSnapshot();
  });

  describe('if given total prop', () => {
    let reviews;
    let total;

    beforeEach(() => {
      reviews = mount(<Reviews total='2'/>);
      total = reviews.findWhere((node) => (
        node.name() === 'h1'
        && node.text() === '2 Reviews'
      ));
    });

    it('renders total', () => {
      expect(total.exists())
        .toBe(true);
    });
  });

  describe('if given reviews', () => {
    let reviews;
    const reviewsList = [
      'one',
      'two'
    ];

    beforeEach(() => {
      reviews = mount(<Reviews reviews={ reviewsList }/>);
    });

    it('renders reviews', () => {
      expect(reviews.find('.Review').length)
        .toBe(reviewsList.length);
    });
  });
});
