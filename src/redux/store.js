import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slice';

const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
});

export default store;