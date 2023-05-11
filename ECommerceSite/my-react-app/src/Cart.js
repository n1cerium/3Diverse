    import * as React from 'react';
    import { Link } from 'react-router-dom';
    import './Cart.css';
    import axios from 'axios';


    export default function Cart({ cartItems }) {
        axios.post('http://localhost:8080/cart').then(res => {
            console.log(res.data);
        });


    return (
        <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        {(!cartItems || cartItems.length === 0) ? (
            <p className="empty-cart-message">Your cart is empty</p>
        ) : (
            <ul className="cart-items-list">
            {cartItems.map(item => (
                <li className="cart-item" key={item.id}>
                <span className="cart-item-name">{item.name}</span> - <span className="cart-item-price">{item.price}</span>
                </li>
            ))}
            </ul>
        )}
        <Link to="/Store" className="continue-shopping-link">Continue Shopping</Link>
        </div>
    );
    }
