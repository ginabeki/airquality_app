/* eslint-disable react/prop-types */
import React from 'react';
import { aqiRatings, handleRatings } from '../Data/api';

const DetailsSummary = ({
  airQuality, status, error, summary,
}) => {
  let content;
  if (airQuality.main) {
    const filter = handleRatings(aqiRatings, airQuality?.main?.aqi)[0];
    if (status === 'loading') {
      content = <p className=" text-gray-400 font-Roboto">Loading...</p>;
    } else if (status === 'succeeded') {
      content = (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
            <div
              className="font-Montserrat rounded-2xl h-24 w-24 flex flex-col justify-center gap-0.5 items-center"
              style={{
                backgroundColor: `${filter.borderColor}`, padding: '0 1rem',
              }}
            >
              <p className=" font-light text-white text-5xl ">{airQuality.main.aqi}</p>
              <small className=" font-medium text-white">AQI</small>
            </div>
            <div>
              <h3 className=" font-Montserrat font-bold text-2xl">
                {airQuality.location.name}
              </h3>
              <small className=" font-Roboto font-light text-sm">
                {airQuality.location.state}
                {airQuality.location.state ? ' - ' : ''}
                {airQuality.location.country}
              </small>
            </div>
          </div>
          <p style={{ padding: '0.2rem 0.8rem' }}>
            Air Quality is
            {' '}
            <span style={{ color: `${filter.borderColor}` }}>{filter.rating}</span>
            {' '}
            at the
            moment
          </p>
          {summary ? <p style={{ padding: '0 0.8rem' }}>{filter.comment}</p> : null}
        </>
      );
    } else if (status === 'failed') {
      content = <p style={{ padding: '0.2rem 0.8rem' }}>{error}</p>;
    }
  }

  return <div>{content}</div>;
};

export default DetailsSummary;
