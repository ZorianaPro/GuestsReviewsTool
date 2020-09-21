import React from 'react';
import './Score.css';

const Score = ({
  score,
  maximumScore = 5
}) => (
  <div className="Score">
    <p>
      <b>{ score }</b> / { maximumScore }
    </p>
  </div>
);

export default Score;