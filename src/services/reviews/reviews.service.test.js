import fetchMock from 'fetch-mock';
import config from '../config';
import reviewsService, { prepareRequestParams } from './';

describe('reviews service', () => {
  describe('get()', () => {
    describe('and the API call succeeds', () => {
      const requestData = {
        start: 0,
        limit: 1,
        filters: {}
      };
      let responce;
      let reviews;

      beforeEach(async () => {
        fetchMock.get(
          `${config.api.reviews}?_start=0&_limit=1`,
          {
            status: 200,
            body: [
              {
                id: 1,
                label: 'Retail (all)',
                group: true,
                parent_id: null
              }
            ]
          }
        );

        responce = await reviewsService.get(requestData);
        reviews = await responce.json();
      });

      afterEach(() => {
        fetchMock.restore();
      });

      it('calls the API', () => {
        expect(fetchMock.called())
          .toBe(true);
      });

      it('resolves with JSON data', () => {
        expect(reviews)
          .toEqual([
            {
              id: 1,
              label: 'Retail (all)',
              group: true,
              parent_id: null
            }
          ]);
      });
    });

    describe('and the API call fails', () => {
      const requestData = {
        start: 0,
        limit: 1,
        filters: {}
      };
      beforeAll(() => {
        fetchMock.get(
          `${config.api.reviews}?_start=0&_limit=1`,
          {
            status: 500
          }
        );
      });

      afterAll(() => {
        fetchMock.restore();
      });

      it('rejects with status', () => {
        expect(reviewsService.get(requestData))
          .rejects
          .toThrow('Failing to fetch reviews 500: Internal Server Error');
      });
    });
  });

  describe('prepareRequestParams()', () => {
    let requestData = {
      start: 0,
      limit: 0,
      filters: {
        score: '',
        channels: []
      }
    };
    let params;

    describe('no start param', () => {
      beforeEach(() => {
        params = prepareRequestParams(requestData);
      });
      it('returns string with start point 0 and default limit', () => {
        expect(params)
          .toEqual('?_start=0&_limit=10');
      });
    });
    describe('given start param', () => {
      beforeEach(() => {
        requestData = {
          ...requestData,
          start: 4
        };
        params = prepareRequestParams(requestData);
      });

      it('returns string with start point and default limit', () => {
        expect(params)
          .toEqual('?_start=4&_limit=10');
      });
    });

    describe('given limit param', () => {
      beforeEach(() => {
        requestData = {
          ...requestData,
          start: 0,
          limit: 20
        };
        params = prepareRequestParams(requestData);
      });

      it('returns string with start point 0 and limit', () => {
        expect(params)
          .toEqual('?_start=0&_limit=20');
      });
    });

    describe('given score param', () => {
      beforeEach(() => {
        requestData = {
          ...requestData,
          filters: {
            ...requestData.filters,
            score: 4.5
          }
        };
        params = prepareRequestParams(requestData);
      });

      it('returns string with score', () => {
        expect(params)
          .toEqual('?_start=0&_limit=20&score_gte=4.5&score_lte=5');
      });
    });
    describe('given channels array param', () => {
      beforeEach(() => {
        requestData = {
          ...requestData,
          filters: {
            ...requestData.filters,
            channels: ['someChannel']
          }
        };
        params = prepareRequestParams(requestData);
      });

      it('returns string with channel', () => {
        expect(params)
          .toEqual('?_start=0&_limit=20&score_gte=4.5&score_lte=5');
      });
    });
  });
});