import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerHome from '../features/home/homeActions';
// import reducerDetails from '';

const store = configureStore({
  reducer: {
    home: reducerHome,
    // details: reducerDetails,
  },
  middleware: [thunk, logger],
});

export default store;
