import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './components/Profile/profileSlice';

export default configureStore({
  reducer: {
    profile: chatReducer,
  },
});
