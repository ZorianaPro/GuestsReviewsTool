import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/reviews/actions';
import './GuestReviews.css';

const GuestReviews = () => {
  const [shownResults, setShownResults] = useState(0);
  const [totalResults, setTotalResults] = useState();
  const [shouldShowLoadButton, setShouldShowLoadButton] = useState(true);

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
    if (reviewsState.reviews) {
      setTotalResults(reviewsState.amount * 1);
      setShownResults(reviewsState.reviews.length);
      debugger
      if (reviewsState.amount * 1 === reviewsState.reviews.length) {
        setShouldShowLoadButton(false);
      }
    }
  }, [reviewsState]);

  const onCLickLoadMore =  useCallback( () => {
    debugger
    if (shownResults !== totalResults) {
      fetchData(shownResults, 10);
    }
  }, [shownResults, fetchData]);

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
        && <div className="LoadMore"
          onClick={ onCLickLoadMore }>
            load more
        </div>
      }
    </div>
  );
};

export default GuestReviews;
