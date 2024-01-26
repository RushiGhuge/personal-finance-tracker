import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    AddUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { AddUser } = UserSlice.actions;
export default UserSlice.reducer;
