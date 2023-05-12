import { events } from '@react-three/fiber';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import validate from './ValidateLogIn'
import axios from 'axios'
import './Login.css';
import {baseURL} from "./url"

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
        const ok = baseURL
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
            // this will send the credentials to the login page if the user exists in the database and set the sessionstorage to that current user
            axios.post(`${baseURL}/login`, userData).then(res => {
                if(res.data === "Success") {
                    sessionStorage.setItem("CurrentUser", userData.email);
                    console.log(sessionStorage.getItem("CurrentUser"));
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
        /* Joshua Header Start */
        <div className="jLogInBody">
            <div className="jLogInHeader">
                <div className="jLogInLogo">
                    <Link to="/"><h1>3Diverse</h1></Link>
                </div>
            </div>
            {/* Joshua Header End */}

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
                    <Link to="/" id="link">Go back to store</Link>
                </div>
            </div>
        
            {/* Joshua Footer End */}
            <div className="footer">
                <div className="logo">
                    <Link to="/"><h1>3Diverse</h1></Link>
                </div>
                <p>Contact us at: <a href="#" target="_blank">support@3Diverse.com</a></p>
                <p><a href="#" target="_blank">Subscribe to our newsletter</a></p>
                <p className="copyright">© 2023 3Diverse </p>
            </div>
        </div>
        /* Joshua Footer Start */
    );
}