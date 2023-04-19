import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Store() {
    return (
    <>
            <div className="body">
                <div className="header">
                    <p>Name</p>
                </div>
                <div className="navbar">
                    <Link to="/Login">Login</Link>
                    <Link to="/Cart">Cart</Link>
                </div>
                <div className="row">
                    <div className="sidebar">
                        <Link to="/About">About</Link>
                        <h2>Reviews</h2>
                    </div>
                    <div className="main">
                        <h2>this is an item</h2>
                        <p>blaa.... </p>
                    </div>
                </div>
            </div>
    </>
  );
}