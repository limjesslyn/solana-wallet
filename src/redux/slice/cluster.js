import { createSlice } from '@reduxjs/toolkit';
import { ClustersNetwork } from '../../const';

export const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        network: localStorage.getItem("cluster") === null ? ClustersNetwork[0] : localStorage.getItem("cluster")
    },
    reducers: {
        setCluster: (state, action) => {
            state.network = action.payload
        },
    },
});

export const { setCluster } = clusterSlice.actions;

export default clusterSlice.reducer;