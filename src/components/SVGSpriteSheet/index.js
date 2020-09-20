import React from 'react';
import AirbnbSymbol from '../AirbnbSymbol';
import BookingcomSymbol from '../BookingcomSymbol';
import HoliduSymbol from '../HoliduSymbol';
import ThumbDownSymbol from '../ThumbDownSymbol';
import ThumbUpSymbol from '../ThumbUpSymbol';
import './SVGSpriteSheet.css';

export const defaults = {
  className: 'SVGSpriteSheet',
  id: 'SVGSpriteSheet'
};

const SVGSpriteSheet = (props) => (
  <svg id={ props.id || defaults.id }
    className={ props.className || defaults.className }>
    <AirbnbSymbol />
    <BookingcomSymbol />
    <HoliduSymbol />
    <ThumbDownSymbol />
    <ThumbUpSymbol />
  </svg>
);

export default SVGSpriteSheet;
