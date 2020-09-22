import React from 'react';
import './Score.css';

const Score = ({
  score,
  maximumScore = 5
}) => (
  <div className="Score">
    <p>
      <span>{ score }</span> / { maximumScore }
    </p>
  </div>
);

export default Score;