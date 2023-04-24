import { events } from '@react-three/fiber';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import validate from './ValidateLogIn'

export default function Login() {
    const [infos, setInfos] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {   
        e.preventDefault();
        const userData = {
            name: infos.name,
            email: infos.email,
            password: infos.password
        }
        const err = validate(infos);
        setErrors(err);
        if(err.email === "" && err.password == "") {
            axios.post('http://localhost:8080/login', userData).then(res => {
                navigate('/Login');
            }).catch(err => console.log(err));
        }
    }
    const handleInput = (e) => {
        setInfos(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    return (
        <div>
            <div>
                <h2>Log In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="text" name="email" placeholder='Enter your email...' onChange={handleInput}/>
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" placeholder='Enter your password...' onChange={handleInput} />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <br />
                <Link to="/Signup">Create an Account</Link>
            </div>
        </div>
    );
}