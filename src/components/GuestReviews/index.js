import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/reviews/actions';
import LoadMore from '../LoadMore';
import Filters from '../Filters';
import AirbnbSVG from '../AirbnbSVG';
import BookingcomSVG from '../BookingcomSVG';
import HoliduSVG from '../HoliduSVG';
import ThumbDownSVG from '../ThumbDownSVG';
import ThumbUpSVG from '../ThumbUpSVG';
import './GuestReviews.css';
const filters = require('../../services/filters');

const GuestReviews = () => {
  const [shownResults, setShownResults] = useState(0);
  const [totalResults, setTotalResults] = useState();
  const [shouldShowLoadButton, setShouldShowLoadButton] = useState(true);
  const [isLoading, setIsLoading] = useState();
  const [scoreFilter, setScoreFilter] = useState();
  const [channelFilter, setChannelFilter] = useState();

  const reviewsState = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const fetchData = useCallback(
    (start = 0, limit = 10, filters) => {
      dispatch(getReviews({
        start: start,
        limit: limit,
        filters: filters
      }));
    }, [dispatch]);

  useEffect(() => {
    const filteringData = {
      channel: channelFilter || [],
      score: scoreFilter || ''
    };
    fetchData(0, 10, filteringData);
  }, [channelFilter, scoreFilter, fetchData]);

  useEffect(() => {
    setIsLoading(reviewsState.isLoading);
  }, [reviewsState.isLoading]);

  useEffect(() => {
    if (reviewsState.reviews && reviewsState.reviews.length) {
      setShownResults(reviewsState.reviews.length);
      setTotalResults(reviewsState.amount);
      if (reviewsState.amount === reviewsState.reviews.length) {
        setShouldShowLoadButton(false);
      }
    }
  }, [reviewsState.reviews]);

  useEffect(() => {
    if (reviewsState.reviews && reviewsState.reviews.length) {
      if (reviewsState.amount === reviewsState.reviews.length) {
        setShouldShowLoadButton(false);
      } else {
        setShouldShowLoadButton(true);
      }
    }
    setTotalResults(reviewsState.amount);
    if (reviewsState.amount === 0) {
      setShouldShowLoadButton(false);
    } else {
      setShouldShowLoadButton(true);
    }
  }, [reviewsState.amount]);

  const onCLickLoadMore =  useCallback(() => {
    const filteringData = {
      channel: channelFilter || [],
      score: scoreFilter || ''
    };
    if (shownResults !== totalResults) {
      fetchData(shownResults, 10, filteringData);
    }
  }, [shownResults, fetchData, totalResults, scoreFilter, channelFilter]);

  const onChangeScore = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setScoreFilter(formData.get('score'));
  }, [setScoreFilter]);

  const onChangeChannel = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setChannelFilter(formData.getAll('channel'));
  }, [setChannelFilter]);

  return (
    <div className="GuestReviews">
      <Filters
        filters={
          filters
        }
        onChangeScore={
          onChangeScore
        }
        onChangeChannel={
          onChangeChannel
        }
      />
      { totalResults }
      {
        reviewsState.reviews
        && reviewsState.reviews
          .map((review) =>
            <div className="Review">
              {
                review.headline
              }
            </div>
          )
      }
      {
        shouldShowLoadButton
        && <LoadMore
          onClick={
            onCLickLoadMore
          }
          isLoading={
            isLoading
          }/>
      }
      <AirbnbSVG/>
      <BookingcomSVG/>
      <HoliduSVG/>
      <ThumbDownSVG/>
      <ThumbUpSVG/>
    </div>
  );
};

export default GuestReviews;
