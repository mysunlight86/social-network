import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './components/Profile/profileSlice';
import chatReducer from './components/Chat/chatSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    chat: chatReducer,
  },
});
