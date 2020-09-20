import React from 'react';

const ThumbUpSVG = (props) => (
  <svg className="ThumbUpSVG" {...props}>
    <use xlinkHref="#ThumbUpSymbol" />
  </svg>
);

export default ThumbUpSVG;
