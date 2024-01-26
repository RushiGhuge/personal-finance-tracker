import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState: initialState,
  reducers: {
    themeSwitcher: (state, actions) => {
      state.theme = actions.payload;
    },
  },
});

export const { themeSwitcher } = ThemeSlice.actions;
export default ThemeSlice.reducer;
