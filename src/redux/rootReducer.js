import { combineReducers } from 'redux';
import reviewsReducer from './reviews/reducer';

export default combineReducers({
  reviews: reviewsReducer
});
