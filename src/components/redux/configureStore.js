import { configureStore } from '@reduxjs/toolkit';
import airQualityReducer from './airQuality';
import searchLocationsReducer from './searchLocation';
import forecastReducer from './forecast';

const store = configureStore({
  reducer: {
    airQuality: airQualityReducer,
    locations: searchLocationsReducer,
    forcastAq: forecastReducer,
  },
});

export default store;
