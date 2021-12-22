import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
    name: 'auth',
    initialState: 11,
    reducers: {
        setAuth(state, action) {
            return (state = action.payload);
        },
    },
});

export const getAuth = (state) => state.auth;

export const { setAuth } = authReducer.actions;

export default authReducer.reducer;