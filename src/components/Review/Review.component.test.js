import React from 'react';
import { shallow, mount } from 'enzyme';
import Review from './';

describe('Review', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Review />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Review />)).toMatchSnapshot();
  });

  describe('if given score', () => {
    let review;

    beforeEach(() => {
      review = mount(<Review score='2'/>);
    });

    it('renders score', () => {
      expect(review.exists('.Score'))
        .toBe(true);
    });
  });

  describe('if given channel', () => {
    let review;

    beforeEach(() => {
      review = mount(<Review channel='AIRBNB'/>);
    });

    it('renders headline', () => {
      expect(review.exists('.Channel'))
        .toBe(true);
    });
  });

  describe('if given headline', () => {
    let review;
    let headline;

    beforeEach(() => {
      review = mount(<Review headline='Review'/>);
      headline = review.findWhere((node) => (
        node.name() === 'h3'
        && node.text() === 'Review'
      ));
    });

    it('renders headline', () => {
      expect(headline.exists())
        .toBe(true);
    });
  });

  describe('if given headline', () => {
    let review;
    let comment;

    beforeEach(() => {
      review = mount(<Review comment='Review'/>);
      comment = review.findWhere((node) => (
        node.name() === 'p'
        && node.text() === 'Review'
      ));
    });

    it('renders comment', () => {
      expect(comment.exists())
        .toBe(true);
    });
  });

  describe('if given negativeFeedback', () => {
    let review;
    let negativeFeedback;

    beforeEach(() => {
      review = mount(<Review negativeFeedback='Review'/>);
      negativeFeedback = review.findWhere((node) => (
        node.name() === 'p'
        && node.text() === 'Review'
      ));
    });

    it('renders negativeFeedback', () => {
      expect(negativeFeedback.exists())
        .toBe(true);
    });
  });

  describe('if given positiveFeedback', () => {
    let review;
    let positiveFeedback;

    beforeEach(() => {
      review = mount(<Review positiveFeedback='Review'/>);
      positiveFeedback = review.findWhere((node) => (
        node.name() === 'p'
        && node.text() === 'Review'
      ));
    });

    it('renders negativeFeedback', () => {
      expect(positiveFeedback.exists())
        .toBe(true);
    });
  });

  describe('if given author', () => {
    let review;
    let author;

    beforeEach(() => {
      review = mount(<Review author='Robert'/>);
      author = review.findWhere((node) => (
        node.name() === 'h4'
        && node.text() === 'Robert'
      ));
    });

    it('renders author', () => {
      expect(author.exists())
        .toBe(true);
    });
  });

  describe('if given publishedAt', () => {
    let review;
    let publishedAt;

    beforeEach(() => {
      review = mount(<Review publishedAt='2020-08-11T12:20:02.340Z'/>);
      publishedAt = review.findWhere((node) => (
        node.name() === 'h5'
        && node.text() === 'Reviewed 11 August 2020'
      ));
    });

    it('renders publishedAt', () => {
      expect(publishedAt.exists())
        .toBe(true);
    });
  });
});
