import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from 'react-icons/hi';
import DetailsSummary from '../../componentsInfo/DetailsSummary';
import {
  fetchAirQuality,
  getAirQuality,
  getError,
  getStatus,
} from '../../redux/airQuality';
import { otherLocation } from '../../Data/api';

const Home = () => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const handleShowDetails = (location) => {
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchAirQuality(location)).unwrap();
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  return (
    <div className="home__section relative min-h-screen px-4">
      <nav
        className="flex justify-between p-4 items-center"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px',
        }}
      >
        <Link to="/">
          <div style={{
            padding: '0.5rem', borderRadius: '4px', border: '1px solid #D16014', backgroundColor: '#fff',
          }}
          >
            <p style={{ color: '#D16014', fontWeight: 'bold' }}>
              BREEZER
            </p>
            <small style={{ color: '#313715', fontSize: '0.8rem' }}>
              air quality app
            </small>
          </div>
        </Link>
        <Link to="search">
          <HiSearchCircle style={{ color: '#D16014', fontSize: '1.5rem' }} />
        </Link>
      </nav>

      <div className="rounded-xl bg-white py-2 pb-4 mb-4 flex flex-col justify-center items-start drop-shadow">
        <div className="text-l font-medium text-gray-600 pb-3 border-b border-solid border-gray-300 px-3 w-full ">
          <h3 style={{ padding: ' 0.2rem 1rem' }}>Home</h3>
        </div>
        <div className="px-4 pt-3">
          <DetailsSummary
            airQuality={airQuality}
            status={status}
            error={error}
            summary={false}
          />
        </div>
      </div>
      <div>
        <div className=" bg-white rounded-2xl drop-shadow-sm mt-3 pt-4 pb-2 font-Roboto">
          <div className="flex justify-between pb-3 border-b border-solid border-gray-300 px-3">
            <h3 style={{
              padding: '0.5rem 0.8rem',
              backgroundColor: '#fff',
              margin: '1rem 0',
              borderRadius: '4px',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
            >
              Other Major Cities
            </h3>
          </div>
          <div>
            <ul style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: '#fff',
              marginBottom: '1rem',
              borderRadius: '4px',
              boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            }}
            >
              {otherLocation.map((location) => (
                <Link
                  to="search/details"
                  key={location.id}
                  onClick={() => handleShowDetails(location)}
                >
                  <li style={{
                    display: 'flex', borderRadius: '4px', border: '1px solid grey', justifyContent: 'space-between', padding: '0.5rem',
                  }}
                  >
                    <p>{location.name}</p>
                    <p className="text-gray-600">{location.country}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link
        style={{ display: 'flex', justifyContent: 'center' }}
        to="search"
      >
        <span style={{
          border: '1px solid #D16014', padding: '0.5rem', borderRadius: '12px', color: 'rgba(0, 0, 0, 0.7)', backgroundColor: '#fff',
        }}
        >
          Search other Locations
        </span>
      </Link>
    </div>
  );
};

export default Home;
