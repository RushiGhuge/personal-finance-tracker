import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const HistoryData = createSlice({
  name: "Account Data",
  initialState: initialState,
  reducers: {
    addHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const { addHistory } = HistoryData.actions;
export default HistoryData.reducer;
