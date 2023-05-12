import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validate from './ValidateRegister';
import axios from 'axios';
import './Register.css';
import {baseURL} from "./url"

//register page
function Signup() {
    //declare usestates
    const [infos, setInfos] = useState({
        F_Name: '',
        L_Name: '',
        email: '',
        phone: '',
        password: '',
        address_line: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
    });

    //this will handle navigating to different pages
    const navigate = useNavigate();
    const [registerState, setRegisterState] = useState("");
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {   
        e.preventDefault();
        const userData = {
            F_Name: infos.F_Name,
            L_Name: infos.L_Name,
            phone: infos.phone,
            email: infos.email,
            password: infos.password,
            address_line: infos.address_line,
            city: infos.city,
            state: infos.state,
            country: infos.country,
            zipcode: infos.zipcode
        }
        //login error check 
        const err = validate(infos);
        setErrors(err);
        console.log(err);
        if(err.F_Name === "" && err.L_Name === "" && err.email === "" && err.phone_number == ""  && err.password === "" 
           && err.address_line === "" && err.city === "" && err.state === "" && err.country === "" && err.zipcode === "") {
            //this will send userData to the .../signup page, so the server side will be able to use this data to do something with it
            axios.post(`${baseURL}/signup`, userData).then(res => {
                console.log(res)
                let RegError = [];
                if(res.data === "Email Fail") {
                    setRegisterState("Email Already Exists");
                }
                if(res.data === "Phone Fail") {
                    setRegisterState("Phone Number Already Exists");
                }
                if(res.data === "Success") {
                    sessionStorage.setItem("CurrentUser", userData.email);
                    navigate('/Welcome')
                }
            }).catch(err => console.log(err));
        } else {
            console.log("Ifailed");
        }
    }
    const handleInput = (e) => {
        setInfos(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    //html code insertion
    return (
        /* Joshua Header Start */
        <div className="signUpBody">
            <div className="signUpHeader">
                <div className="signUpLogo">
                    <Link to="/"><h1>3Diverse</h1></Link>
                </div>
            </div>
            {/* Joshua Header End */}

            <div id="register-body">
                <div id="register-page">
                    <h2>Register</h2>
                    <form className="form" id="register-form" action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='F_Name'>First Name </label><br/>
                            <input type="text" name="F_Name" placeholder='John' onChange={handleInput} /><br/>
                            {errors.F_Name && <span className="error-message">{errors.F_Name}</span>}
                        </div>
                        <div>
                            <label htmlFor='L_Name'>Last Name </label><br/>
                            <input type="text" name="L_Name" placeholder='Doe' onChange={handleInput} /><br/>
                            {errors.L_Name && <span className="error-message">{errors.L_Name}</span>}
                        </div>
                        <div>
                            <label htmlFor='email'>Email </label><br/>
                            <input type="text" name="email" placeholder='johndoe@gmail.com' onChange={handleInput} /><br/>
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone Number </label><br/>
                            <input type="text" name="phone" placeholder='123-456-7890' onChange={handleInput} /><br/>
                            {errors.phone_number && <span className="error-message">{errors.phone_number}</span>}

                        </div>
                        <div>
                            <label htmlFor='password'>Password </label><br/>
                            <input type="password" name="password" placeholder='Enter your password...' onChange={handleInput} /><br/>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        <div>
                            <label htmlFor='address_line'>Address Line </label><br/>
                            <input type="text" name="address_line" placeholder='123 Pummel St' onChange={handleInput} /><br/>
                            {errors.address_line && <span className="error-message">{errors.address_line}</span>}
                        </div>
                        <div>
                            <label htmlFor='city'>City </label><br/>
                            <input type="text" name="city" placeholder='Northridge' onChange={handleInput} /><br/>
                            {errors.city && <span className="error-message">{errors.city}</span>}
                        </div>
                        <div>
                            <label htmlFor='state'>State </label><br/>
                            <input type="text" name="state" placeholder='California' onChange={handleInput} /><br/>
                            {errors.state && <span className="error-message">{errors.state}</span>}
                        </div>
                        <div>
                            <label htmlFor='country'>State </label><br/>
                            <input type="text" name="country" placeholder='United State' onChange={handleInput} /><br/>
                            {errors.country && <span className="error-message">{errors.country}</span>}
                        </div>
                        <div>
                            <label htmlFor='zipcode'>Zipcode </label><br/>
                            <input type="text" name="zipcode" placeholder='12345' onChange={handleInput} /><br/>
                            {errors.zipcode && <span className="error-message">{errors.zipcode}</span>}
                        </div>
                        <button id="signup-btn">SignUp</button>
                        {registerState && <span className="error-message">{registerState}</span>} 
                    </form>
                    <br />
                    <Link id="link-to-acc" to="/Login">Already have an account?</Link>
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
    )
}

export default Signup