import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getAirQuality, getError, getStatus } from '../redux/airQuality';

const AppComponents = () => {
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  let content;

  if (status === 'loading') {
    content = <p className=" text-gray-400 font-Roboto">Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className=" bg-white rounded-2xl drop-shadow-sm mt-3 pt-4 pb-2 font-Roboto">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.5rem',
        }}
        >
          <h3 className="text-l font-medium text-gray-600 ">Components</h3>
          <small className=" font-light text-gray-400">
            {' '}
            Updated:
            {moment(new Date()).startOf('hours').fromNow()}
          </small>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          margin: '1rem',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          backgroundColor: '#fff',
          padding: '1rem',
        }}
        >
          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>CO</p>
            <p className="text-gray-600">{airQuality.components.co}</p>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>
              NO
              <sub>2</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.no2}</p>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>NO</p>
            <p className="text-gray-600">{airQuality.components.no}</p>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>
              O
              <sub>3</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.o3}</p>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>
              SO
              <sub>2</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.so2}</p>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>
              PM
              <sub>2.5</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.pm2_5}</p>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>
              {' '}
              PM
              <sub>10</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.pm10}</p>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', border: '1px solid grey', alignItems: 'center', borderRadius: '4px', padding: '0.5rem', width: '10rem',
          }}
          >
            <p>
              NH
              {' '}
              <sub>3</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.nh3}</p>
          </div>
        </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <p className="text-red-400 font-Roboto">{error}</p>;
  }

  return <div>{content}</div>;
};

export default AppComponents;
