import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: { gptPage: false },

  reducers: {
    setGptPage: (state, action) => {
      state.gptPage = action.payload;
    },
  },
});

export default gptslice.reducer;
export const { setGptPage } = gptslice.actions;
