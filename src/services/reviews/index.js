import 'isomorphic-fetch';
import config from '../config';
import { methods } from '../../support/http';

// Filter example score
// https://interview-task-api.bookiply.io/reviews/?score_gte=3&score_lte=4
// Filter example channel
// https://interview-task-api.bookiply.io/reviews/?channel=HOLIDU&channel=AIRBNB

export const prepareRequestParams = ({
  start,
  limit,
  filters
}) => {
  const params = {
    start: '',
    limit: '',
    score: '',
    channel: ''
  };

  if (start) {
    params.start = `?_start=${start}`;
  } else {
    params.start = '?_start=0';
  }
  if (limit) {
    params.limit = `&_limit=${limit}`;
  } else {
    params.limit = '&_limit=10';
  }
  if (filters) {
    if (filters.score) {
      params.score = `&score_gte=${filters.score}&score_lte=5`;
    }
    if (filters.channel) {
      params.channel = '';
      filters.channel.map((ch) =>
        params.channel += `&channel=${ch}`
      );
    }
  }
  return Object.values(params).join('');
};

export const get = ({
  start,
  limit,
  filters
}) =>
  fetch(
    `${config.api.reviews}${prepareRequestParams({
      start: start,
      limit: limit,
      filters: filters
    })}`,
    {
      method: methods.get
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failing to fetch reviews ${response.status}: ${response.statusText}`);
    }
    return response;
  });

export default {
  get,
  prepareRequestParams
};
