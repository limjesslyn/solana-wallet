import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        index: 0,
    },
    reducers: {
        setIndex: (state, action) => {
            state.index = action.payload
        },
    },
});

export const { setIndex } = tokenSlice.actions;

export default tokenSlice.reducer;