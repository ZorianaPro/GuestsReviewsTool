import { actions } from './actions';

export const getInitialState = () => ({
  isLoading: false,
  error: {},
  reviews: []
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case actions.setIsLoading:
      return {
        ...state,
        isLoading: action.payload
      };
    case actions.setError:
      return {
        ...state,
        error: action.payload
      };
    case actions.setReviews:
      return {
        ...state,
        error: false,
        reviews: action.payload
      };
    case actions.setMoreReviews:
      return {
        ...state,
        error: false,
        reviews: [...state.reviews, ...action.payload]
      };
    case actions.setAmount:
      return {
        ...state,
        amount: action.payload
      };
    default:
      return state;
  }
};
