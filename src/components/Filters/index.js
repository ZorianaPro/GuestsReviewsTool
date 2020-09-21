import React, { useCallback } from 'react';
import './Filters.css';

const Filters = ({
  filters,
  onChangeScore,
  onChangeChannel
}) => {
  const _onChange = useCallback((event) => {
    const option = event.target;
    const category = option.name;
    const form = document.querySelector(`form[name=${category}]`);
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.click();
  }, []);

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const category = event.target.name;
    if (category === 'score' && typeof onChangeScore === 'function') {
      onChangeScore(event);
    }
    if (category === 'channel' && typeof onChangeChannel === 'function') {
      onChangeChannel(event);
    }
  }, [onChangeChannel, onChangeScore]);

  return (
    <div className="Filters">
      <div className="Filters-Container">
        <div className="Filters-Container-Content">
          <h2>Filters</h2>
          <div className="Forms-Container">
            {
              filters
              && filters.map((filter) => (
                <form className="Filters-Category"
                  name={ filter.name }
                  onSubmit={ onSubmit }>
                  <h3>{ filter.name }</h3>
                  {
                    filter.values
                    && filter.values
                      .map((option, key) => (
                        <span className="Filters-Category-Option">
                          {
                            filter.name === 'channel'
                            && <input type="checkbox"
                              id={ `${filter.name}-${key}` }
                              key={ `${filter.name}-${key}` }
                              name={ filter.name }
                              value={ option.value }
                              onChange={ _onChange }
                            />

                          }
                          {
                            filter.name === 'score'
                            && <input type="radio"
                              id={ `${filter.name}-${key}` }
                              key={ `${filter.name}-${key}` }
                              name={ filter.name }
                              value={ option.value }
                              onChange={ _onChange }
                            />
                          }
                          <label htmlFor={ `${filter.name}-${key}` }>
                            { option.value }
                            {
                              filter.name === 'score'
                              && <span> & up</span>
                            }
                          </label>
                        </span>
                      ))
                  }
                  <button type="submit" />
                </form>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;