export const actions = {
  requestReviews: 'REVIEWS:REQUEST:REVIEWS',
  setReviews: 'REVIEWS:SET:REVIEWS',
  setError: 'REVIEWS:SET:ERROR',
  setPages: 'SET:PAGES'
};

export const requestReviews = (requestData) => ({
  type: actions.requestReviews,
  value: requestData
});

export const setError = (error) => ({
  type: actions.setError,
  value: error
});

export const setReviews = (reviews) => ({
  type: actions.setReviews,
  value: reviews
});

export const setPages = (pages) => ({
  type: actions.setPages,
  value: pages
});

export default {
  requestReviews,
  setError,
  setReviews,
  setPages
};
