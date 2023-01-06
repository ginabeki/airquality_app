import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiSearchCircle } from 'react-icons/hi';
import { getAirQuality, getError, getStatus } from '../../redux/airQuality';
import DetailsSummary from '../../componentsInfo/DetailsSummary';
import Forecast from '../../componentsInfo/Forecast';
import AppComponents from '../../componentsInfo/AppComponents';

const Details = () => {
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  return (
    <div className="relative max-w-[440px] w-[100vw] min-h-[100vh] mx-auto bg-gray-100 opacity-50">
      <div style={{
        padding: '0.5rem', display: 'flex', justifyContent: 'space-between', color: '#D16014', fontSize: '1.5rem',
      }}
      >
        <Link to="/">
          <div style={{ border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff' }}>
            <IoIosClose />
          </div>
        </Link>
        <Link to="/search" style={{ border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff' }}>
          <HiSearchCircle className="text-4xl text-gray-300 " />
        </Link>
      </div>
      <div className="px-5 py-7">
        <DetailsSummary airQuality={airQuality} status={status} error={error} summary />
        <Forecast airQuality={airQuality} />
        <AppComponents airQuality={airQuality} />
      </div>
    </div>
  );
};

export default Details;
