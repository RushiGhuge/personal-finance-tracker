import { configureStore } from "@reduxjs/toolkit";
import TotalBalanceSlice from "./Reducers/TotalBalanceSlice";
import UserSlice from "./Reducers/UserSlice";
import AccountDataSlice from "./Reducers/AccountDataSlice";
import ThemeSlice from "./Reducers/ThemeSlice";
import HistorySlice from "./Reducers/HistorySlice";

const store = configureStore({
  reducer: {
    balance: TotalBalanceSlice,
    User: UserSlice,
    accountData: AccountDataSlice,
    Theme: ThemeSlice,
    History: HistorySlice,
  },
});

export default store;
