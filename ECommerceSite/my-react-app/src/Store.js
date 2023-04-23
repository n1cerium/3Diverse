import * as React from 'react';
import './Store.css';
import { Link } from 'react-router-dom';

export default function Store() {
    return (
    <>
            <div className="body">
                <div className="header">
                    <p>Name</p>
                </div>
                <div className="navbar">
                    <div className="right">
                        <Link to="/Login"><h2>Login</h2></Link>
                        <Link to="/Cart"><h2>Cart</h2></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="sidebar">
                        <h3>Filters</h3>
                        <div className = "textSize">
                            <input type="checkbox" id="item1" name="item1" value="Office"/>
                            <label for="item1"> Office</label><br/>
                            <input type="checkbox" id="item2" name="item2" value="Food"/>
                            <label for="item2"> Food</label><br/>
                            <input type="checkbox" id="item3" name="item3" value="Anime"/>
                            <label for="item3"> Anime</label><br/><br/>
                        </div>
                        <div className ="bottom">
                            <Link to="/ThreeEx"><h2>Three.js Example</h2></Link>
                        </div>
                    </div>

                    <div className="main">
                        <div className = "row2">
                        <article className="col-1">
                            <div className="card">
                                <img src="coming soon.png" alt="Avatar"/>
                                <div className="container">
                                    
                                </div>
                            </div>
                        </article>
                        <article className="col-2">
                            <div className="card">
                                <img src="coming soon.png" alt="Avatar" />
                                <div className="container">

                                </div>
                            </div>
                        </article>
                        <article className="col-3">
                            <div className="card">
                                <img src="coming soon.png" alt="Avatar" />
                                <div className="container">

                                </div>
                            </div>
                        </article>
                        <article className="col-4">
                            <div className="card">
                                <img src="coming soon.png" alt="Avatar" />
                                <div className="container">

                                </div>
                            </div>
                        </article>
                        </div>
                        </div>
                </div>
            </div>
    </>
  );
}