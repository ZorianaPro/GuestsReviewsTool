import React from 'react';
import { shallow, mount } from 'enzyme';
import Filters from './';

describe('Filters', () => {
  const filtersArray = [
    {
      'name': 'score',
      'values': [
        {
          'value': 3
        },
        {
          'value': 2
        }
      ]
    },
    {
      'name': 'channel',
      'values': [
        {
          'value': 'AIRBNB'
        },
        {
          'value': 'SOMETHINGELSE'
        }
      ]
    }
  ];

  it('renders without crashing', () => {
    expect(
      shallow.bind(
        shallow,
        <Filters />
      ))
      .not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(
      mount(
        <Filters />
      )
    ).toMatchSnapshot();
  });

  describe('on pass filters', () => {
    let filters;

    beforeAll(() => {
      filters = mount(
        <Filters
          filters={
            filtersArray
          }
        />
      );
    });

    it('renders correct amount of categories', () => {
      expect(filters.find('form.Filters-Category').length)
        .toEqual(filtersArray.length);
    });

    it('renders filter properties', () => {
      expect(filters.find('form.Filters-Category').first().find('input').length)
        .toEqual(2);
    });

    it('renders as expected', () => {
      expect(filters).toMatchSnapshot();
    });
  });
});
