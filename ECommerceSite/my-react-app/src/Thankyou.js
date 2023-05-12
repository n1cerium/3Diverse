import * as React from 'react';
import { Link } from 'react-router-dom';
import './Thankyou.css';

//thank you page
export default function Thankyou() {
    const handleClick = (e) => {
        sessionStorage.setItem("CurrentUser", null);
    }
    return (
        /* Joshua Header Start */
        <div className="thankYouBody">
            <div className="thankYouHeader">
                <div className="thankYouLogo">
                    <Link to="/"><h1>3Diverse</h1></Link>
                </div>
            </div>
            {/* Joshua Header End */}

            <div id="tyContent">
                <div>
                    <div class="tyText-row row">
                        <div class="tyQuote-container col-xs-10 col-xs-offset-1">
                            <div class="tyText-container" id="tyQuote-box">
                            <p class="message">Thank you for shopping with us!</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-return-store-div">
                        <Link to="/" className="button-return-store link-no-underline" role="button">
                            Return to Home Page
                        </Link>
                    </div>

                    <Link onClick={handleClick} to="/" className="button-logout link-no-underline" role="button">
                        Log out
                    </Link>
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