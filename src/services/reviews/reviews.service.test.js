import fetchMock from 'fetch-mock';
import config from '../config';
import reviewsService from './';

describe('reviews service', () => {
  describe('get()', () => {
    const requestData = {
      start: 0,
      limit: 1
    };
    describe('and the API call succeeds', () => {
      let responce;
      let reviews;

      beforeEach(async () => {
        fetchMock.get(
          `${config.api.reviews}?${new URLSearchParams({
            _start: requestData.start,
            _limit: requestData.limit
          })}`,
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
      beforeAll(() => {
        fetchMock.get(
          `${config.api.reviews}?${new URLSearchParams({
            _start: requestData.start,
            _limit: requestData.limit
          })}`,
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

      it('calls the API', () => {
        expect(fetchMock.called()).toBe(true);
      });
    });
  });
});
