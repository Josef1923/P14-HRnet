import React, { useState } from 'react';
import Header from '@/header';
import Footer from '@/footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dropdown from "josef1923-dropdown-react"
import "josef1923-dropdown-react/src/Dropdown.css"
import { states } from "../../datas/states";
import { departments } from "../../datas/departments";
import icon from "../../assets/icon/icon.svg";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/slice';
import Modal from 'react-modal';
import './styles.scss';

Modal.setAppElement('#root');

function Create() {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);


    const stateOptions = states.map((state) => ({
        label: state.name,
        value: state.abbreviation
    }))

    const handleSubmit = (e) => {
        e.preventDefault();

       

        const newEmployee = {
            firstName,
            lastName,
            dateOfBirth: dateOfBirth?.toLocaleDateString('fr-FR') || '',
            startDate: startDate?.toLocaleDateString('fr-FR') || '',
            street,
            city,
            selectedState,
            zipCode,
            department,
        };

        dispatch(addEmployee(newEmployee));
        setIsModalOpen(true);
    }

    return (
        <div className='principal'>
            <Header />
            <div className='content'>
                <h1>Create Employee</h1>
                <div className='form'>
                    <div className='leftSide'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' name='firstName'
                            value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' name='lastName'
                            value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor='dateOfBirth'>Date of Birth</label>
                        <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)}
                            dateFormat="dd-MM-yyyy"
                            isClearable
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100} />
                        <label htmlFor='startDate'>Start Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                            dateFormat="dd-MM-yyyy"
                            isClearable
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={20}
                            todayButton="Aujourd'hui" />
                    </div>
                    <div className='rightSide'>
                        <fieldset className='address'>
                            <legend>Address</legend>
                            <label htmlFor='street'>Street</label>
                            <input type='text' id='street' name='street'
                                value={street} onChange={(e) => setStreet(e.target.value)} />
                            <label htmlFor='city'>City</label>
                            <input type='text' id='city' name='city'
                                value={city} onChange={(e) => setCity(e.target.value)} />
                            <label htmlFor='state'>State</label>
                            <Dropdown
                                options={stateOptions}
                                onChange={(val) => setSelectedState(val)}
                                icon={<img src={icon} alt="Dropdown Icon" />}
                            />
                            <label htmlFor='zipCode'>Zip Code</label>
                            <input type='number' id='zipCode' name='zipCode'
                                value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        </fieldset>
                        <label htmlFor='department'>Department</label>
                        <Dropdown
                            options={departments}
                            onChange={(val) => setDepartment(val)}
                            icon={<img src={icon} alt="Dropdown Icon" />}
                        />
                    </div>
                </div>
                <div className='formButton'>
                    <button type="button" onClick={handleSubmit}>Save</button>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    contentLabel="Confirmation"
                    className="modal"
                    overlayClassName="modal-overlay">
                    <p>Employee Created!</p>
                    <button onClick={() => setIsModalOpen(false)}>Close</button>
                </Modal>
            </div>
            <Footer />
        </div>
    )
}

export default Create;