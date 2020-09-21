import React from 'react';
import './Channel.css';
import AirbnbSVG from '../AirbnbSVG';
import BookingcomSVG from '../BookingcomSVG';
import HoliduSVG from '../HoliduSVG';

const Channel = ({
  channel
}) => (
  <div className="Channel">
    {
      channel === 'AIRBNB'
      && <AirbnbSVG/>
    }
    {
      channel === 'BOOKINGCOM'
      && <BookingcomSVG/>
    }
    {
      channel === 'HOLIDU'
      && <HoliduSVG/>
    }
  </div>
);

export default Channel;