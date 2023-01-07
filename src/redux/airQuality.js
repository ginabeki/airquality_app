import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.REACT_APP_URL;
const apiKey = process.env.REACT_APP_KEY;

const initialState = {
  loading: false,
  pollutionData: [],
  error: '',
};

const rearrangeData = (apiData, localData) => {
  const data = { ...apiData, ...localData };
  return data;
};

export const fetchData = createAsyncThunk('AIR_POLLUTION_DATA', (coordinate) => axios
  .get(`${url}?lat=${coordinate.lat}&lon=${coordinate.long}${apiKey}`)
  .then((response) => rearrangeData(response.data, coordinate)));

const airQuality = createSlice({
  name: 'pollutionData',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      const states = state;
      states.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const states = state;
      states.loading = false;
      states.pollutionData = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      const states = state;
      states.loading = false;
      states.pollutionData = [];
      states.error = action.error.message;
    });
  },
});

export default airQuality.reducer;
