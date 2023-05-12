import * as React from 'react';
import { Link } from 'react-router-dom';
import './Thankyou.css';

export default function Thankyou() {
    return (
             
        <div id="content">
            <div>
                <h1 className="frontcolor">3Diverse</h1>
                <div class="text-row row">
                    <div class="quote-container col-xs-10 col-xs-offset-1">
                        <div class="text-container" id="quote-box">
                           <p class="message">Thank you for shoppping with us!</p>
                        </div>
                    </div>
                </div>
                <Link to="/" className="button-return-store link-no-underline" role="button">
                    Return to Home Page
                </Link>

                <Link to="/" className="button-logout link-no-underline" role="button">
                    Log out
                </Link>
            </div>
        </div>
    );
} 