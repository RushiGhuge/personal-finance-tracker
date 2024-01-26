import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
};

const BalanceSlice = createSlice({
  name: "Balance",
  initialState: initialState,
  reducers: {
    addIncome: (state, action) => state.balance + action.payload,
  },
});

export const { addIncome } = BalanceSlice.actions;
export default BalanceSlice.reducer;
