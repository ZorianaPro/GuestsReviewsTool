import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions, { setError } from '../../redux/reviews/actions';
import { Switch, Route, Redirect, NavLink, useHistory, useParams } from 'react-router-dom';
import './GuestReviews.css';

const GuestReviews = () => {

  const [page, setPage] = useState(1);

  const reviewsState = useSelector((state) => state.reviews);

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    setPage(params.page);
  }, [params]);

  useEffect(() => {
    dispatch(actions.requestReviews({
      _page: params.page,
      _limit: 10
    }));
  }, []);

  useEffect(() => {
    dispatch(actions.requestReviews({
      _page: page,
      _limit: 10
    }));
  }, [page]);


  return (
    <div className="GuestReviews">
      <div className="Pagination">
        <NavLink exact to="/reviews/2">
          Page 2
        </NavLink>
      </div>
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
    </div>
  );
};

export default GuestReviews;
