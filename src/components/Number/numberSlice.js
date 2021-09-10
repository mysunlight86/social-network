import { createSlice } from "@reduxjs/toolkit";

export const NUMBER_API_URL = "http://numbersapi.com/";

export const numberSlice = createSlice({
  name: "number",
  initialState: {
    loading: false,
    error: false,
    data: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setError, setData } = numberSlice.actions;

export default numberSlice.reducer;