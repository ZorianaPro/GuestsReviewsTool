import 'isomorphic-fetch';
import config from '../config';
import { headers, methods, modes } from '../../support/http';
import mimetypes from '../../support/mimetypes';

export const get = (requestParams) =>
  fetch(
    `${config.api.reviews}?${new URLSearchParams(requestParams)}`,
    {
      method: methods.get,
      mode: modes.cors,
      headers: {
        [headers.contentType]: mimetypes.json
      }
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failing to fetch career levels ${response.status}: ${response.statusText}`);
    }
    throw response;
  });

export default {
  get
};
