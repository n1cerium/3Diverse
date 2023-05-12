import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        /* Joshua Header Start */
        <div className="welcomeBody">
            <div className="welcomeHeader">
                <div className="welcomeLogo">
                    <Link to="/"><h1>3Diverse</h1></Link>
                </div>
            </div>
            {/* Joshua Header End */}
            
            <div id="content">
                <div>
                    {/* <h1 className="frontcolor">3Diverse</h1> */}
                    <div className="text-row row">
                        <div className="welcomeMsg-container col-xs-10 col-xs-offset-1">
                            <div className="text-container" id="welcomeMsg-box">
                                <h3>Welcome to 3Diverse</h3>
                                <p className="message">
                                    Discover a whole new dimension of shopping with our
                                    small yet extraordinary ecommerce site, featuring four
                                    captivating products showcased in mesmerizing 3D
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="button-cool-div">
                        <Link to="/" className="button-cool link-no-underline" role="button">
                        Start shopping
                        </Link>
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
        /* Joshua Footer Start */
    );
}