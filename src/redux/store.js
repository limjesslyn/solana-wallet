import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import clusterReducer from './slice/cluster';

export default configureStore({
    reducer: {
        auth: authReducer,
        cluster: clusterReducer,
    }
});