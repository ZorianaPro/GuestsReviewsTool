import React, { useState, useEffect, useCallback } from 'react';
import './LoadMore.css';

const LoadMore = ({
  onClick,
  isLoading
}) => {
  const [_isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  const _onClick = useCallback((event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  }, [onClick]);

  return(
    <div className="LoadMore">
      <div className="LoadMore-Button"
        onClick={ _onClick }
      >
        <p>load more</p>
        {
          _isLoading
          && <span className="LoadMore-Button-Spinner">spinner</span>
        }
      </div>
    </div>
  );
};

export default LoadMore;