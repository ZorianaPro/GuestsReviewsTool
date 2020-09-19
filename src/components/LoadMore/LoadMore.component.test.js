import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadMore from './';
import { act } from 'react-dom/test-utils';

describe('LoadMore', () => {
  it('renders without crashing', () => {
    expect(
      shallow.bind(
        shallow,
        <LoadMore />
      ))
      .not
      .toThrow();
  });

  it('renders as expected', () => {
    expect(
      mount(
        <LoadMore />
      )
    ).toMatchSnapshot();
  });

  describe('on click load button', () => {
    let loadMore;
    let onClick;

    beforeAll(() => {
      onClick = jest.fn();
      loadMore = mount(
        <LoadMore
          onClick={
            onClick
          }
        />
      );
      act(() => {
        loadMore
          .find('.LoadMore-Button')
          .simulate('click');
      });
    });

    it('calls callback', () => {
      expect(onClick)
        .toHaveBeenCalled();
    });
  });

  describe('isLoading', () => {
    describe('is true', () => {
      let loadMore;

      beforeAll(() => {
        loadMore = mount(
          <LoadMore
            isLoading={
              true
            }
          />
        );
      });

      it('shows loading spinner', () => {
        expect(loadMore.exists('.LoadMore-Button-Spinner'))
          .toBe(true);
      });
    });
    describe('is false', () => {
      let loadMore;

      beforeAll(() => {
        loadMore = mount(
          <LoadMore
            isLoading={
              false
            }
          />
        );
      });

      it('shows loading spinner', () => {
        expect(loadMore.exists('.LoadMore-Button-Spinner'))
          .toBe(false);
      });
    });
  });
});
