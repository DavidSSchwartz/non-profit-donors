import { configureStore } from '@reduxjs/toolkit';
import panesReducer from '../features/panes/panesSlice';
import searchReducer from '../features/search/searchSlice';

export default configureStore({
  reducer: {
    panes: panesReducer,
    search: searchReducer,
  },
});
