const colonnes = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
        width: '120px'
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
        width: '120px'
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,
        width: '110px'
    },
    {
        name: 'Departement',
        selector: row => row.department,
        sortable: true,
        width: '135px'
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
        sortable: true,
        width: '125px'
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
        width: '120px'
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
        width: '110px'
    },
    {
        name: 'State',
        selector: row => row.selectedState,
        sortable: true,
        width: '80px'
    },
    {
        name: 'Zip Code',
        selector: row => row.zipCode,
        sortable: true,
        width: '100px'
    },
];

export default colonnes;