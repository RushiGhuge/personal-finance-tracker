import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBalance: 0,
  totalIncome: 0,
  totalExpence: 0,
  incomesArray: [],
  expencesArray: [],
  datesArray: [],
  allTransitionData: [],
};

const AccountDataSlice = createSlice({
  name: "Account Data",
  initialState: initialState,
  reducers: {
    addTransition: (state, action) => {
      if (!action.payload) return;

      // state.allTransitionData = action.payload;
      let totalIncome = 0;
      let totalExpence = 0;
      state.incomesArray = [];
      state.expencesArray = [];
      state.datesArray = [];

      let arr = action.payload.sort((a, b) => a.createdAt - b.createdAt);
      // console.log(arr);
      state.allTransitionData = [...arr];
      arr.forEach((ele) => {
        if (ele.type == "Credit") {
          totalIncome += Number(ele.amount);
          state.incomesArray.push(Number(ele.amount));
        } else {
          totalExpence += Number(ele.amount);
          state.expencesArray.push({
            amount: Number(ele.amount),
            name: ele.name,
            tag: ele.tag,
          });
        }
        state.datesArray.push(ele.createdAt);
      });

      state.totalIncome = totalIncome;
      state.totalExpence = totalExpence;
      state.totalBalance = state.totalIncome - state.totalExpence;

      return;
    },
  },
});

export const { addTransition } = AccountDataSlice.actions;
export default AccountDataSlice.reducer;
