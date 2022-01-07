import { createSlice } from '@reduxjs/toolkit';

export const nftSlice = createSlice({
    name: 'nft',
    initialState: {
        index: 0,
    },
    reducers: {
        setIndex: (state, action) => {
            state.index = action.payload
        },
    },
});

export const { setIndex } = nftSlice.actions;

export default nftSlice.reducer;