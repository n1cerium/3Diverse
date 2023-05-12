    import * as React from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import './Cart.css';
    import axios from 'axios';
    import validate from './ValidateCart'
    import {baseURL} from "./url"

//cart page
export default function Cart() {
        //declare usestates
        const [currUser, setCurrUser] = React.useState({
            c_User: sessionStorage.getItem("CurrentUser")
        });
        const [cartItems, setCartItems] = React.useState([]);
        const [errors, setErrors] = React.useState({})
        const [cardInfo, setCardInfo] = React.useState({
            C_Number: "",
            C_Expiration: "",
            C_Code: "",
            C_Name: "",
            C_Postal: ""
        })
        let totalPrice = 0;
        const navigate = useNavigate();
        const handleInput = (e) => {
            setCardInfo(prev => ({...prev, [e.target.name]: [e.target.value]}))
        };
        //error check
        const handleSubmit = (e) => {
            const err = validate(cardInfo);
            setErrors(err);
            if(err.C_Number === "" && err.C_Name === "" && err.C_Expiration === "" && err.C_Code === "" && err.C_Name === "" && err.C_Postal === "") {
                //this will remove all the items in the cart if they enter correct information
                axios.post(`${baseURL}/CartRemove`).then(res => {
                    console.log(res.data)
                    navigate("/Thankyou");
                });
            }
            
        }
        // this will set the items in the cart for the current user that some items to the cart
        axios.post(`${baseURL}/cart`, currUser).then(res => {
            setCartItems(res.data);
        });
        cartItems.forEach(
            (item) => {
                totalPrice += item.Price;
            });

    //html code insertion
    return (
        <>
            {/* Joshua Header Start */}
            <div className="cartBody">
                <div className="cartHeader">
                    <div className="cartLogo">
                        <Link to="/"><h1>3Diverse</h1></Link>
                    </div>
                </div>
                {/* Joshua Header End */}

                <div id="cart-container">
                    <div id='col-2'>
                        <div id='col-2-1'>
                            {(!cartItems || cartItems.length === 0) ? (
                                <p className="empty-cart-message">Your 3Diverse Cart is empty</p>
                            ) : (
                                <ul className="cart-items-list">
                                    <h2>3Diverse Items</h2>
                                {cartItems.map(item => (
                                    <li className="cart-item" key={item["Item ID"]}>
                                    <p className="cart-item-name">{item.Name}</p>  <p className="cart-item-price">${item.Price}</p>
                                    </li>
                                ))}
                                <li className="cart-item" id="total-item">
                                    <p className="cart-item-name" id="total">Total:</p>  
                                    <p className="cart-item-price" id="total-price">${totalPrice}</p>
                                </li>
                                </ul>
                            )}
                        <Link to="/" className="continue-shopping-link">Continue Shopping</Link>
                        </div>
                        <div id="col-2-2">
                            <div id="card-info">
                                <h2>3Diverse Card Info</h2>
                                <div id="cart-form" >
                                    <div>
                                        <label htmlFor='C_Number'>Card Number </label>
                                        <input type="text" name="C_Number" placeholder='1234 5678 9012 3459' onChange={handleInput} />

                                    </div>
                                    <div>
                                        <label htmlFor='C_Expiration'>Expiration Date </label>
                                        <input type="text" name="C_Expiration" placeholder='January 2023' onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='C_Code'>CVC Code </label>
                                        <input type="text" name="C_Code" placeholder='123' onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor='C_Name'>Cardholder Name </label>
                                        <input type="text" name="C_Name" placeholder='John Doe' onChange={handleInput} />

                                    </div>
                                    <div>
                                        <label htmlFor='C_Postal'>Postal Code</label>
                                        <input type="text" name="C_Postal" placeholder='12345' onChange={handleInput} />
                                    </div>
                                    <button id="payment-btn" onClick={handleSubmit}>Complete Payment</button>
                                </div>
                                <div id="errors">
                                    {errors.C_Number && <span className="error-message">{errors.C_Number}</span>}<br/><br/>
                                    {errors.C_Expiration && <span className="error-message">{errors.C_Expiration}</span>}<br/><br/>
                                    {errors.C_Code && <span className="error-message">{errors.C_Code}</span>}<br/><br/>
                                    {errors.C_Name && <span className="error-message">{errors.C_Name}</span>}<br/><br/>
                                    {errors.C_Postal && <span className="error-message">{errors.C_Postal}</span>}<br/>
                                </div>
                            </div>
                        </div>

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
            {/* Joshua Footer Start */}
        </>
    );
    }
