import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: { value: {} },
    reducers: {
        external: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { external } = dataSlice.actions;

export default dataSlice.reducer;
