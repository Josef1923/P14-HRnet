import React from 'react';
import Header from '@/header';
import Footer from '@/footer';
import DataTable from 'react-data-table-component';
import colonnes from '@/employeesTable/columns.js';
import './styles.scss';


const donnees = [
    {
        id: 1,
        firstName: 'Alice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    },
    {
        id: 2,
        firstName: 'bdlice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 3,
        firstName: 'dlddice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 4,
        firstName: 'efflice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 5,
        firstName: 'clicfzae',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    },
    {
        id: 1,
        firstName: 'Alice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    },
    {
        id: 2,
        firstName: 'bdlice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 3,
        firstName: 'dlddice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 4,
        firstName: 'efflice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 5,
        firstName: 'clicfzae',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    },
    {
        id: 1,
        firstName: 'Alice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    },
    {
        id: 2,
        firstName: 'bdlice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 3,
        firstName: 'dlddice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 4,
        firstName: 'efflice',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    }, {
        id: 5,
        firstName: 'clicfzae',
        lastName: 'Dupont',
        startDate: '2022-01-01',
        department: 'Ingénierie',
        dateOfBirth: '1990-05-15',
        street: '123 Rue Principale',
        city: 'Paris',
        state: 'Île-de-France',
        zipCode: '75001',
    },
];

function Current() {

    return (
        <div className='principal'>
            <Header />
            <div className='content'>
                <h1>Current Employees</h1>

                <div className='dataTable'>
                    <DataTable
                        columns={colonnes}
                        data={donnees}
                        pagination
                        highlightOnHover
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Current; 