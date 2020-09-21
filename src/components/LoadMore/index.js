import React, { useState, useEffect, useCallback } from 'react';
import './LoadMore.css';
import Loading from '../Loading';

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
        {
          !_isLoading
          && <p>LOAD MORE</p>
        }
        {
          _isLoading
          && <Loading/>
        }
      </div>
    </div>
  );
};

export default LoadMore;