import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import clusterReducer from './slice/cluster';
import nftReducer from './slice/nft';
import tokenReducer from './slice/token';

export default configureStore({
    reducer: {
        auth: authReducer,
        cluster: clusterReducer,
        nft: nftReducer,
        token: tokenReducer,
    }
});