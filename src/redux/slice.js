import { createSlice } from '@reduxjs/toolkit';

const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];


const initialState = {
    employees: savedEmployees,

};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
            localStorage.setItem('employees', JSON.stringify(state.employees));
        },
        addEmployeesList: (state, action) => {
            state.employees = action.payload;
            localStorage.setItem('employees', JSON.stringify(state.employees));
        }
    },
});

export const { addEmployee, addEmployeesList } = employeeSlice.actions;
export default employeeSlice.reducer;
