import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../actions";

const initialState = {
  isLoading: false,
  isError: false,
  flights: [],
  path: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlight.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlight.rejected, (state) => {
      (state.isLoading = false), (state.isError = true);
    });
    builder.addCase(getFlight.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
  },
});
export default flightSlice.reducer;
export const { setPath } = flightSlice.actions;
