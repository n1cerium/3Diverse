import { events } from '@react-three/fiber';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validate from './ValidateLogIn'
import axios from 'axios'
import './Login.css';

//login page
export default function Login() {
    //declare usestates
    const [infos, setInfos] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState("");
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {   
        e.preventDefault();
        const userData = {
            name: infos.name,
            email: infos.email,
            password: infos.password
        }
        //login error check 
        const err = validate(infos);
        setErrors(err);
        if(err.email === "" && err.password == "") {
            axios.post('http://localhost:8080/login', userData).then(res => {
                if(res.data === "Success") {
                    sessionStorage.setItem("CurrentUser", userData.email);
                    navigate('/');
                } else {
                    setLoginState("Incorrect email/password");
                }
            }).catch(err => console.log(err));
        }
    }
    const handleInput = (e) => {
        setInfos(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    //html code insertion
    return (
        <div id="login-body">
            <div id="login-page">
                <h2>Log In</h2>
                <form className="form" id="login-form" action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label> <br/>
                        <input type="text" name="email" placeholder='Enter your email...' onChange={handleInput} />  <br />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label> <br/>
                        <input type="password" name="password" placeholder='Enter your password...' onChange={handleInput} />  <br />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <button id="login-btn" role=""type="submit">Log In</button>
                </form>
                {loginState && <span>{loginState}</span>}
                <br />
                <Link to="/Signup" id="link">Create an Account</Link>
            </div>
        </div>
    );
}