import actionCreators, { actions } from './actions';
import fetchMock from 'fetch-mock';
import config from '../../services/config';
import reviewsService from '../../services/reviews';
import reducer from './reducer';

describe('reviews reducer', () => {
  const requestData = {
    start: 0,
    limit: 1
  };

  const requestDataLoadMore = {
    start: 1,
    limit: 1
  };
  let state;

  beforeEach(() => {
    state = undefined;
  });

  describe(actions.getReviews, () => {
    let dispatch;
    let responce;
    let amount;
    let reviews;

    beforeAll(async () => {
      dispatch = jest.fn();
      fetchMock.get(
        `${config.api.reviews}?${new URLSearchParams({
          _start: requestData.start,
          _limit: requestData.limit
        })}`,
        {
          headers: {
            'X-Total-Count': '5'
          },
          body: {
            id: 1, something: 'else'
          }
        }
      );

      responce = await reviewsService.get(requestData);
      reviews = await responce.json();
      amount = responce.headers.get('X-Total-Count');
      await actionCreators.getReviews(requestData)(dispatch, () => ({}));
    });

    afterAll(() => {
      fetch(config.api.reviews).mockRestore();
    });

    it('sets the isLoading flag to true', () => {
      expect(dispatch)
        .toHaveBeenCalledWith(
          expect.objectContaining({
            type: actions.setIsLoading,
            payload: true
          })
        );
    });

    it('sets amount to one from API', () => {
      expect(dispatch)
        .toHaveBeenCalledWith(
          expect.objectContaining({
            type: actions.setAmount,
            payload: amount * 1
          })
        );
    });

    describe('first load', () => {
      beforeEach(async () => {
        await actionCreators.getReviews(requestData)(dispatch, () => ({}));
      });

      it('sets the reviews array', () => {
        expect(dispatch)
          .toHaveBeenCalledWith(
            expect.objectContaining({
              type: actions.setReviews,
              payload: reviews
            })
          );
      });
    });

    describe('load more', () => {
      beforeEach(async () => {
        dispatch = jest.fn();
        fetchMock.get(
          `${config.api.reviews}?${new URLSearchParams({
            _start: requestDataLoadMore.start,
            _limit: requestDataLoadMore.limit
          })}`,
          {
            headers: {
              'X-Total-Count': '5'
            },
            body: {
              id: 1, something: 'else 2'
            }
          }
        );

        responce = await reviewsService.get(requestDataLoadMore);
        reviews = await responce.json();
        amount = responce.headers.get('X-Total-Count');
        await actionCreators.getReviews(requestDataLoadMore)(dispatch, () => ({}));
      });

      it('sets the reviews array', () => {
        expect(dispatch)
          .toHaveBeenCalledWith(
            expect.objectContaining({
              type: actions.setMoreReviews,
              payload: reviews
            })
          );
      });
    });
  });

  describe(actions.setIsLoading, () => {
    beforeEach(() => {
      state = reducer(state, actionCreators.setIsLoading(true));
    });

    it('sets loading', () => {
      expect(state.isLoading)
        .toEqual(true);
    });
  });

  describe(actions.setReviews, () => {
    beforeEach(() => {
      state = reducer(state, actionCreators.setReviews(
        [
          {
            id: 1, headline: 'test'
          }
        ]
      ));
    });

    it('sets reviews array', () => {
      expect(state.reviews)
        .toEqual(
          [
            {
              id: 1, headline: 'test'
            }
          ]
        );
    });
  });

  describe(actions.setMoreReviews, () => {
    beforeEach(() => {
      state = {
        ...state,
        reviews: [
          {
            id: 1, headline: 'test'
          }
        ]
      };
      state = reducer(state, actionCreators.setMoreReviews(
        [
          {
            id: 1, headline: 'test 2'
          }
        ]
      ));
    });

    it('sets reviews array', () => {
      expect(state.reviews)
        .toEqual([
          {
            id: 1, headline: 'test'
          },
          {
            id: 1, headline: 'test 2'
          }
        ]);
    });
  });

  describe(actions.setError, () => {
    beforeEach(() => {
      state = reducer(state, actionCreators.setError(
        {
          error: true, message: 'test'
        }
      ));
    });

    it('sets error', () => {
      expect(state.error)
        .toEqual(
          {
            error: true, message: 'test'
          }
        );
    });
  });

  describe(actions.setAmount, () => {
    beforeEach(() => {
      state = reducer(state, actionCreators.setAmount('4'));
    });

    it('sets amount', () => {
      expect(state.amount)
        .toEqual(4);
    });
  });
});
