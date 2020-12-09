import React, {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {Button} from 'antd';

function Home() {
    const [email, setEmail] = useState('')
    useEffect(() => {
        var token = localStorage.getItem('token')
        console.log(token)
        var decoded = jwt_decode(token)
        setEmail(`${decoded.email_address}`)
    }, [email])

    const handleSubmit = () => {
        localStorage.clear()
        window.location = '/login'
    }
    return (
        <>
            <h1>
                Hi {email}
            </h1>
            <Button type='primary' onClick={handleSubmit}>Logout</Button>
        </>
    )
}

export default Home
