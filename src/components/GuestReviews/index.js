import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/reviews/actions';
import LoadMore from '../LoadMore';
import './GuestReviews.css';

const GuestReviews = () => {
  const [shownResults, setShownResults] = useState(0);
  const [totalResults, setTotalResults] = useState();
  const [shouldShowLoadButton, setShouldShowLoadButton] = useState(true);
  const [isLoading, setIsLoading] = useState();

  const reviewsState = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const fetchData = useCallback(
    (start = 0, limit = 10) => {
      dispatch(getReviews({
        start: start,
        limit: limit
      }));
    }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(reviewsState.isLoading);
  }, [reviewsState.isLoading]);

  useEffect(() => {
    if (reviewsState.reviews && reviewsState.reviews.length) {
      setShownResults(reviewsState.reviews.length);
      setTotalResults(reviewsState.amount * 1);
      if (reviewsState.amount * 1 === reviewsState.reviews.length) {
        setShouldShowLoadButton(false);
      }
    }
  }, [reviewsState.reviews]);

  const onCLickLoadMore =  useCallback(() => {
    if (shownResults !== totalResults) {
      fetchData(shownResults, 10);
    }
  }, [shownResults, fetchData, totalResults]);

  return (
    <div className="GuestReviews">
      { totalResults }
      {
        reviewsState.reviews
        && reviewsState.reviews.map((review) =>
          <div className="Review">
            {
              review.headline
            }
          </div>
        )
      }
      {
        shouldShowLoadButton
        && <LoadMore onClick={ onCLickLoadMore } isLoading={ isLoading }/>
      }
    </div>
  );
};

export default GuestReviews;
