import { createSlice } from '@reduxjs/toolkit';
import { ClustersNetwork } from '../../const';

export const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        network: ClustersNetwork[0]
    },
    reducers: {
        setCluster: (state, action) => {
            state.network = action.payload
        },
    },
});

export const { setCluster } = clusterSlice.actions;

export default clusterSlice.reducer;