import { actions } from './actions';

export const getInitialState = () => ({
  isLoading: false,
  error: {},
  reviews: []
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case actions.requestReviews:
      return {
        ...state,
        error: false,
        isLoading: true
      };
    case actions.setError:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case actions.setReviews:
      return {
        ...state,
        isLoading: false,
        error: false,
        reviews: action.reviews
      };
    default:
      return state;
  }
};
