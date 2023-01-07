import { configureStore } from '@reduxjs/toolkit';
import airReducer from './airQuality';

const store = configureStore({
  reducer: {
    airPollution: airReducer,
  },
});

export default store;
