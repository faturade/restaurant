import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exsamplaSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
