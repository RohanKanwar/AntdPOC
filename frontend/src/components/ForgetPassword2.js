import React from 'react';
import { useForm } from "react-hook-form";
import '../styles/Register.css'

function ForgetPassword2() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {console.log(data)
    window.location='/login'}
    return (
        <div className='register-container'>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='single-input'>
                    <label>New Password</label>
                    <br />
                    <input style={{border: 'none', border: '1px solid #DCDAD7', padding: '4px 11px'}} type='password' name="new_password" ref={register({required: true})} placeholder="New Password"/>
                    <div>
                    {errors.new_password && <span>Please enter new password</span>}
                    </div>
                </div>

                <div className='single-input'>
                    <label>Confirm Password</label>
                    <br />
                    <input style={{border: 'none', border: '1px solid #DCDAD7', padding: '4px 11px'}} type='password' name="confirm_password" ref={register({required: true})} placeholder="Confirm Password"/>
                    <div>
                    {errors.confirm_password && <span>Please confirm new password</span>}
                    </div>
                </div>

                <input style={{background: '#3E85C7', padding: '4px 15px', border: 'none', borderRadius: '4px', color: '#FFF'}} type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default ForgetPassword2
