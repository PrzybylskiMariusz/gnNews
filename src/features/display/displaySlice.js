import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	gridView: false,
};

export const displaySlice = createSlice({
	name: "display",
	initialState,
	reducers: {
		toggleView: (state) => {
			state.gridView = !state.gridView;
		},
	},
});

export const { toggleView } = displaySlice.actions;

export default displaySlice.reducer;
