import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './home2.js';

export default function Home() {
    return (
        <>
            <h1>Welcome to Name</h1>
            <div className="button_wrapper">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                    </svg>
                </div>
            </div>

            <span className="reset hidden">Return to home page</span>
        </>
    );
}