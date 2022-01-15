import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        index: 0,
        currentToken: {},
    },
    reducers: {
        setIndex: (state, action) => {
            state.index = action.payload
        },
        setCurrentToken: (state, action) => {
            state.currentToken = action.payload
        },
    },
});

export const { setIndex, setCurrentToken } = tokenSlice.actions;

export default tokenSlice.reducer;