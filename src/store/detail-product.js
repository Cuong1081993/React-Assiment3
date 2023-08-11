import { createSlice } from "@reduxjs/toolkit";

const initialToggleDetail = { showHide: false, viewDetail: "" };

const toggleDetailSlice = createSlice({
  name: "toggleDetail",
  initialState: initialToggleDetail,
  reducers: {
    showDetail(state, action) {
      state.showHide = true; 
      state.viewDetail = action.payload;
    },
    hideDetail(state) {
      state.showHide = false;
    },
  },
});

export const toggleDetailActions = toggleDetailSlice.actions;
export default toggleDetailSlice.reducer;
