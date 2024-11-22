import {configureStore} from '@reduxjs/toolkit'
import postSlice from './PostSlice';




const lostStore = configureStore({
    reducer:{
        post:postSlice.reducer

    }
});

export default lostStore;