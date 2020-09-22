import React from 'react';
import Score from '../Score';
import Channel from '../Channel';
import './Review.css';
import ThumbUpSVG from '../ThumbUpSVG';
import ThumbDownSVG from '../ThumbDownSVG';

const Review = ({
  score,
  maximumScore,
  headline,
  comment,
  author,
  positiveFeedback,
  negativeFeedback,
  channel,
  publishedAt
}) => {
  const date = publishedAt && new Date(publishedAt);
  return (
    <div className="Review">
      <header>
        {
          score
          && <Score
            score={ score }
            maximumScore={ maximumScore }
          />
        }
        {
          channel
          && <Channel channel={ channel }/>
        }
      </header>
      {
        headline
        && <h4>{ headline }</h4>
      }
      <div className="Review-Message">
        {
          comment
          && <p>{ comment }</p>
        }
        {
          positiveFeedback
          && <div className="Review-Feedback">
            <ThumbUpSVG/>
            <p>{ positiveFeedback }</p>
          </div>
        }
        {
          negativeFeedback
          && <div className="Review-Feedback">
            <ThumbDownSVG/>
            <p>{ negativeFeedback }</p>
          </div>
        }
      </div>
      {
        author
        && <h4>{ author }</h4>
      }
      {
        publishedAt
        && <h5>
          {
            `Reviewed ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
          }
        </h5>
      }
    </div>
  );
};

export default Review;