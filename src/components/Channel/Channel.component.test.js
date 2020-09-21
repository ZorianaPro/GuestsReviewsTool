import React from 'react';
import { shallow, mount } from 'enzyme';
import Channel from './';

describe('Channel', () => {
  it('renders without crashing', () => {
    expect(shallow.bind(shallow, <Channel />)).not.toThrow();
  });

  it('renders as expected', () => {
    expect(shallow(<Channel />)).toMatchSnapshot();
  });

  describe('channel is AIRBNB', () => {
    let channel;
    beforeEach(() => {
      channel = mount(<Channel channel="AIRBNB"/>);
    });

    it('renders AIRBNB icon', () => {
      expect(channel.exists('.AirbnbSVG'))
        .toBe(true);
    });
  });

  describe('channel is BOOKINGCOM', () => {
    let channel;
    beforeEach(() => {
      channel = mount(<Channel channel="BOOKINGCOM"/>);
    });

    it('renders BOOKINGCOM icon', () => {
      expect(channel.exists('.BookingcomSVG'))
        .toBe(true);
    });
  });
  describe('channel is HOLIDU', () => {
    let channel;
    beforeEach(() => {
      channel = mount(<Channel channel="HOLIDU"/>);
    });

    it('renders HOLIDU icon', () => {
      expect(channel.exists('.HoliduSVG'))
        .toBe(true);
    });
  });
});
