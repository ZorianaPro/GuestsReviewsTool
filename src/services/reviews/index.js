import 'isomorphic-fetch';
import config from '../config';
import { methods } from '../../support/http';

export const get = ({
  start,
  limit
}) =>
  fetch(
    `${config.api.reviews}?${new URLSearchParams({
      _start: start,
      _limit: limit
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
  get
};
