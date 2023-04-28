import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validate from './ValidateRegister';
import axios from 'axios';
import './Register.css';

function Signup() {
    const [infos, setInfos] = useState({
        F_Name: '',
        L_Name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {   
        e.preventDefault();
        const userData = {
            F_Name: infos.F_Name,
            L_Name: infos.L_Name,
            email: infos.email,
            password: infos.password
        }
        const err = validate(infos);
        setErrors(err);
        if(err.name === "" && err.email === "" && err.password == "") {
            axios.post('http://localhost:8080/signup', userData).then(res => {
                console.log(res);
                navigate('/Login')
            }).catch(err => console.log(err));
        }
    }
    const handleInput = (e) => {
        setInfos(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

    return (
        <div>
        <div id="register-form">
            <h2>Register</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='F_Name'>First Name </label><br/>
                    <input type="text" name="F_Name" placeholder='John' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='L_Name'>Last Name </label><br/>
                    <input type="text" name="L_Name" placeholder='Doe' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='email'>Email </label><br/>
                    <input type="text" name="email" placeholder='johndoe@gmail.com' onChange={handleInput} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor='phone'>Phone Number </label><br/>
                    <input type="password" name="phone" placeholder='123-456-7890' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='password'>Password </label><br/>
                    <input type="password" name="password" placeholder='Enter your password...' onChange={handleInput} />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label htmlFor='line'>Address Line </label><br/>
                    <input type="password" name="line" placeholder='123 Pummel St' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='city'>City </label><br/>
                    <input type="text" name="city" placeholder='Northridge' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='state'>State </label><br/>
                    <input type="text" name="state" placeholder='California' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='country'>State </label><br/>
                    <input type="text" name="country" placeholder='United State' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor='zipcode'>Zipcode </label><br/>
                    <input type="text" name="zipcode" placeholder='12345' onChange={handleInput} />
                </div>
                <button>SignUp</button>
            </form>
            <br />
            <Link to="/Login">Already have an account?</Link>
        </div>
    </div>
    )
}

export default Signup