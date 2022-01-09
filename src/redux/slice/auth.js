import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        isLogin: localStorage.getItem("phrase") !== "" && localStorage.getItem("phrase") !== null,
        phrase: localStorage.getItem("phrase")
    },
    reducers: {
        setLogin(state, action) {
            state.isLogin = action.payload;
        },
        setPhrase(state, action) {
            state.phrase = action.payload;
        },
    },
});

export const getLogin = (state) => state.isLogin;
export const getPhrase = (state) => state.phrase;

export const { setPhrase, setLogin } = authReducer.actions;

export default authReducer.reducer;