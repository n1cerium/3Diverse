import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

//home page
//html code insertion
export default function Home() {
    return (
             
        <div id="content">
            <div>
                <h1 className="frontcolor">3Diverse</h1>
                <div class="text-row row">
                    <div class="quote-container col-xs-10 col-xs-offset-1">
                        <div class="text-container" id="quote-box">
                            <p class="message">Welcome message</p>
                        </div>
                    </div>
                </div>
                <Link to="/" className="button-cool link-no-underline" role="button">
                Start shopping
                </Link>
            </div>
       </div>
    );
}