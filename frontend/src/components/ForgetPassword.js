import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import '../styles/Register.css'

function ForgetPassword(props) {
    const { register, handleSubmit, errors } = useForm();
    const [showOtp, setShowOtp] = useState(false)

    const onSubmit = (data) => {
        console.log(data)
        setShowOtp(true)
    }

    const onSubmit2 = (data) => {
        console.log(data)
        window.location = '/forgotpassword2'
    }

    return (
        <div className='register-container'>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='single-input'>
                    <label>Email</label>
                    <br />
                    <input style={{border: 'none', border: '1px solid #DCDAD7', padding: '4px 11px'}} name="email" ref={register({required: true})} placeholder="Email Id"/>
                    <div>
                    {errors.email && <span>Please enter email</span>}
                    </div>
                    {/* <Input required type='text' name='email_address' onChange={handleEmail} value={email} placeholder='Email Id'/> */}
                </div>

                <input style={{background: '#3E85C7', padding: '4px 15px', border: 'none', borderRadius: '4px', color: '#FFF'}} type='submit' value='Send OTP'/>
            </form>

            <form onSubmit={handleSubmit(onSubmit2)}>
                {showOtp == true ? 
                    <>
                        <div className='single-input-otp'>
                            <label>OTP</label>
                            <br />
                            <input style={{border: 'none', border: '1px solid #DCDAD7', padding: '4px 11px'}} name="otp" ref={register({required: true})} placeholder="OTP"/>
                            <div>
                                {errors.otp && <span>Please enter otp</span>}
                                </div>
                                {/* <Input required type='password' name='password' onChange={handleOtp} value={otp} placeholder='OTP'/> */}
                        </div> 
                        <input style={{background: '#3E85C7', padding: '4px 15px', border: 'none', borderRadius: '4px', color: '#FFF'}} type='submit' value='Reset Password' />
                    </>: null}
            </form>
        </div>
    )
}

export default ForgetPassword
