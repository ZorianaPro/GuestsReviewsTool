import config from '../../services/config';

export const actions = {
  getReviews: 'GET:REVIEWS',
  setIsLoading: 'SET:IS:LOADING',
  setReviews: 'SET:REVIEWS',
  setMoreReviews: 'SET:MORE:REVIEWS',
  setError: 'REVIEWS:SET:ERROR',
  setAmount: 'REVIEWS:SET:AMOUNT'
};

export const setError = (error) => ({
  type: actions.setError,
  payload: error
});

export const setReviews = (reviews) => ({
  type: actions.setReviews,
  payload: reviews
});

export const setMoreReviews = (reviews) => ({
  type: actions.setMoreReviews,
  payload: reviews
});

export const setAmount = (amount) => ({
  type: actions.setAmount,
  payload: amount
});

export const setIsLoading = (isLoading) => ({
  type: actions.setIsLoading,
  payload: isLoading
});

export const getReviews = ({
  start = 0,
  limit
}) =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    const requestParams = {
      _start: start,
      _limit: limit
    };
    try {
      const data = await fetch(`${config.api.reviews}?${new URLSearchParams(requestParams)}`);
      const amount = data.headers.get('X-Total-Count');
      const reviews = await data.json();
      dispatch(setAmount(amount));
      if (start) {
        dispatch(setMoreReviews(reviews));
      } else {
        dispatch(setReviews(reviews));
      }
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export default {
  getReviews,
  setIsLoading,
  setError,
  setReviews,
  setMoreReviews,
  setAmount
};
