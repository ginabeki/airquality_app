import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import DetailsSummary from '../../components/DetailsSummary';
import '../../index.css';
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
          </div>
        </Link>
        <Link to="search">
          <HiSearchCircle style={{ color: '#D16014', fontSize: '1.5rem' }} />
        </Link>
      </nav>

      <div className="rounded-xl bg-white py-2 pb-4 mb-4 flex flex-col justify-center items-start drop-shadow">
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
              STATS BY COUNTRY
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
                    display: 'flex', flexDirection: 'column', borderRadius: '4px', border: '1px solid grey', justifyContent: 'space-between', padding: '0.5rem', height: '150px',
                  }}
                  >
                    <p style={{ display: 'flex', justifyContent: 'flex-end', border: '1px solid #fff' }} className="arrowIcon"><FaArrowRight /></p>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'end' }}>
                      <p style={{
                        fontWeight: 'bold', fontSize: '1.3rem', textTransform: 'uppercase', fontFamily: 'Lato',
                      }}
                      >
                        {location.name}
                      </p>
                      <p className="text-gray-600">{location.country}</p>
                    </div>

                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
