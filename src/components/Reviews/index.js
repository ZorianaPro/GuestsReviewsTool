import React from 'react';
import Review from '../Review';
import Paper from '../Paper';
import Loading from '../Loading';
import './Reviews.css';

const Reviews = ({
  reviews,
  total,
  isLoading
}) => (
  <div className="Reviews">
    <Paper>
      {
        total !== 0
        && <h1>{ total } Reviews</h1>
      }
      {
        !total && isLoading
        && <Loading/>
      }
      {
        !total && !isLoading
        && <h1>Sorry, no results...</h1>
      }
      {
        (reviews || [])
          .map((review) =>
            <Review
              score={ review.score }
              author={ review.author }
              headline={ review.headline }
              comment={ review.comment }
              positiveFeedback={ review.positiveFeedback }
              negativeFeedback={ review.negativeFeedback }
              channel={ review.channel }
              publishedAt={ review.publishedAt }
            />
          )
      }
    </Paper>
  </div>
);

export default Reviews;