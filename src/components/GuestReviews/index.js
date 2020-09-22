import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/reviews/actions';
import Filters from '../Filters';
import './GuestReviews.css';
import Reviews from '../Reviews';
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
      <div className="GuestReviews-Bg-Image">
        <div className="GuestReviews-Bg-Mask"/>
        <div className="GuestReviews-Bg-Shape-Left"/>
        <div className="GuestReviews-Bg-Shape-Right"/>
      </div>
      <div className="GuestReviews-Container">
        <header>
          <p>ID: 091021</p>
          <h1>La Casa de las Flores</h1>
        </header>
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
        <div className="GuestReviews-Container-Main">
          {
            reviewsState.reviews
            && <Reviews
              reviews={ reviewsState.reviews }
              total={ totalResults }
              isLoading={ isLoading }
              shouldShowLoadButton={ shouldShowLoadButton }
              onCLickLoadMore={ onCLickLoadMore }
            />
          }
        </div>
      </div>
    </div>
  );
};

export default GuestReviews;
