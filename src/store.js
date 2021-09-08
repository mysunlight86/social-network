import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './components/Profile/profileSlice';
import chatReducer from './components/Chat/chatSlice';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
  reducer: {
    profile: profileReducer,
    chat: chatReducer,
  },
  middleware: [thunkMiddleware]
});
