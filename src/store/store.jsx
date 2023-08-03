import { configureStore } from '@reduxjs/toolkit';
import myReducer from "./reducers.jsx";


const store = configureStore(
    {reducer:myReducer})
export default store;