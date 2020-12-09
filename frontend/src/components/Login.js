import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {userLogin} from '../redux/action/userAction';
import '../styles/Register.css'
import axios from 'axios';

function Login(props) {
    const initialInputState = {email_address: '', password: ''}
    const [entry, setEntry] = useState(initialInputState);
    const [showErr, setShowErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const {email_address, password} = entry
    const dispatch = useDispatch()
    const userDetails = useSelector(
        state => state.userReducer
    )

    const handleInputChange = e => {
        setEntry({
            ...entry, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!entry.email_address) {
            setShowErr(true)
            setErrMsg('Please enter email Id')
        } else if(!entry.password) {
            setShowErr(true)
            setErrMsg('Please enter password')
        } else {
            // In this part, userDetails value is used for setting err message or success message for login but userDetails value is updated late
            // await dispatch(userLogin(entry))
            // console.log(userDetails)
            await axios.post('http://localhost:5000/api/user/login', entry).then(res => {
                if(res.data.message == 'Logged In Successfully') {
                    setShowErr(false)
                    setErrMsg('')
                    // window.location='/home'
                }
                else {
                    setShowErr(true)
                    setErrMsg(`${res.data.message}`)
                }
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className='register-container'>
            <h2>Login</h2>
            <form>
                <div className='single-input'>
                    <label>Email</label>
                    <br />
                    <Input required type='text' name='email_address' onChange={handleInputChange} value={email_address} placeholder='Email Id'/>
                </div>

                <div className='single-input'>
                    <label>Password</label>
                    <br />
                    <Input required type='password' name='password' onChange={handleInputChange} value={password} placeholder='Password'/>
                </div>

                {showErr == true ? 
                <div className='err-login'>
                    {errMsg}
                </div> : null}

                <Button type='primary' onClick={handleSubmit}>Login</Button>
            </form>
        </div>
    )
}

export default Login
