import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userName: '',
  },
  reducers: {
    editName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { editName } =
profileSlice.actions;

export default profileSlice.reducer;