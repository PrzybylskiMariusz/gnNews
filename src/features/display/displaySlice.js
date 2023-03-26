import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listView: true,
};

export const displaySlice = createSlice({
	name: "display",
	initialState,
	reducers: {
		toggleView: (state) => {
			state.listView = !state.listView;
		},
	},
});

export const { toggleView } = displaySlice.actions;

export default displaySlice.reducer;
