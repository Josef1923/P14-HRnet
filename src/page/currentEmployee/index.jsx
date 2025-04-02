import React from 'react';
import Header from '@/header';
import Footer from '@/footer';
import DataTable from 'react-data-table-component';
import colonnes from '@/employeesTable/columns.js';
import { useSelector } from 'react-redux';
import './styles.scss';

function Current() {

    const employees = useSelector((state) => state.employee.employees);
    console.log(employees);

    return (
        <div className='principal'>
            <Header />
            <div className='content'>
                <h1>Current Employees</h1>

                <div className='dataTable'>
                    <DataTable
                        columns={colonnes}
                        data={employees}
                        pagination
                        highlightOnHover
                        responsive
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Current; 