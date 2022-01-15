import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        isLogin: localStorage.getItem("secret") !== "" && localStorage.getItem("secret") !== null,
        secret: localStorage.getItem("secret")
    },
    reducers: {
        setLogin(state, action) {
            state.isLogin = action.payload;
        },
        setSecret(state, action) {
            state.secret = action.payload;
        },
    },
});

export const getLogin = (state) => state.isLogin;
export const getSecret = (state) => state.secret;

export const { setSecret, setLogin } = authReducer.actions;

export default authReducer.reducer;