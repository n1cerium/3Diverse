import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import validate from './ValidateRegister'

function Signup() {
    const [infos, setInfos] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {   
        e.preventDefault();
        const err = validate(infos);
        setErrors(err);
        if(errors.name === "" && errors.email === "" && errors.password == "") {
            
        }
    }
    const handleInput = (e) => {
        setInfos(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }

    return (
        <div>
        <div>
            <h2>Register</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" placeholder='Enter your name...' onChange={handleInput} />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name="email" placeholder='Enter your email...' onChange={handleInput} />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" placeholder='Enter your password...' onChange={handleInput} />
                    {errors.password && <span>{errors.password}</span>}
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