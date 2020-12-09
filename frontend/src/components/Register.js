import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {userRegister} from '../redux/action/userAction';
import '../styles/Register.css'
import "antd/dist/antd.css";

function Register() {
    const initialInputState = {first_name: '', last_name: '', email_address: '', contact_number: '', location: '', name_of_institution: '', institute_type: '', role_in_institution: '', website_link: '', password: ''}
    const [entry, setEntry] = useState(initialInputState);
    const [showErr, setShowErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const {first_name, last_name, email_address, contact_number, location, name_of_institution, institute_type, role_in_institution, website_link, password} = entry
    const dispatch = useDispatch()

    const handleInputChange = e => {
        setEntry({
            ...entry, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!entry.first_name || !entry.last_name || !entry.email_address || !entry.contact_number || !entry.location || !entry.name_of_institution
            || !entry.role_in_institution || !entry.website_link || !entry.password) {
                setShowErr(true);
                setErrMsg('Please fill all fields')
            }
        else {
            dispatch(userRegister(entry))
            setShowErr(false)
            setErrMsg('')
            window.location = '/login'
        }
    }

    return (
        <div className='register-container'>
            <h2>Register</h2>
            <form>
                <div className='single-input'>
                    <label>First Name</label>
                    <br/>
                    <Input required type='text' name='first_name' onChange={handleInputChange} value={first_name} placeholder='First Name'/>
                </div>

                <div className='single-input'>
                    <label>Last Name</label>
                    <br/>
                    <Input required type='text' name='last_name' onChange={handleInputChange} value={last_name} placeholder='Last Name'/>
                </div>

                <div className='single-input'>
                    <label>Email Address</label>
                    <br/>
                    <Input required type='email' name='email_address' onChange={handleInputChange} value={email_address} placeholder='Email Address'/>
                </div>

                <div className='single-input'>
                    <label>Contact Number</label>
                    <br/>
                    <Input required type='text' name='contact_number' onChange={handleInputChange} value={contact_number} placeholder='Contact Number'/>
                </div>

                <div className='single-input'>
                    <label>Location</label>
                    <br/>
                    <Input required type='text' name='location' onChange={handleInputChange} value={location} placeholder='Location'/>
                </div>

                <div className='single-input'>
                    <label>Name of Institution</label>
                    <br/>
                    <Input required type='text' name='name_of_institution' onChange={handleInputChange} value={name_of_institution} placeholder='Name of Institution'/>
                </div>

                <div className='single-input'>
                    <label>Institute Type</label>
                    <br/>
                    <Input required type='text' name='institute_type' onChange={handleInputChange} value={institute_type} placeholder='Institute Type'/>
                </div>

                <div className='single-input'>
                    <label>Role in Institution</label>
                    <br/>
                    <Input required type='text' name='role_in_institution' onChange={handleInputChange} value={role_in_institution} placeholder='Role'/>
                </div>

                <div className='single-input'>
                    <label>Website Link</label>
                    <br/>
                    <Input required type='text' name='website_link' onChange={handleInputChange} value={website_link} placeholder='Website Link'/>
                </div>

                <div className='single-input'>
                    <label>Password</label>
                    <br/>
                    <Input required type='password' name='password' onChange={handleInputChange} value={password} placeholder='Password'/>
                </div>

                <div className='login-span'>
                    <span>Already have an account? <a href='Login'>Login</a></span>
                </div>

                {showErr == true ? 
                <div className='err-div'>
                    {errMsg}
                </div> : null}

                <div className='button'>
                    <Button type='primary' onClick={handleSubmit}>Register</Button>
                </div>
            </form>
        </div>
    )
}

export default Register
