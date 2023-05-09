
import React, { Suspense } from 'react';
import './Store.css';
import { Link } from 'react-router-dom';

import Box2 from "./component/Box2";
import Rubiks from "./component/products/Rubiks";
import Drone from "./component/products/Drone";
import Mug from "./component/products/Mug";
import MCPlank from "./component/products/MCPlank";
import USBDrive from "./component/products/USBDrive";
import Rccar from "./component/products/Rccar";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './ThreeEx.css';


export default function Store() {
    return (
    <>
            <div className="body">
                <div className="header">
                    <h1>Name</h1>
                </div>
                <div className="navbar">
                    <div className="right">
                        <Link to="/Login"><h3>Login</h3></Link>
                        <Link to="/Cart"><h3>Cart</h3></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="sidebar">
                        <h2><u>Filters</u></h2><br/>
                        <div className="row3">
                            <div className="col-1-2">
                                <h3>Type:</h3>
                                <div className = "textSize">
                                    <input type="checkbox" id="item1" name="item1" value="Clothes"/>
                                        <label for="item1"> Clothes</label><br/>
                                    <input type="checkbox" id="item2" name="item2" value="Food"/>
                                        <label for="item2"> Food</label><br />
                                    <input type="checkbox" id="item3" name="item3" value="Toys" />
                                        <label for="item3"> Toys</label><br />
                                    <input type="checkbox" id="item4" name="item4" value="Anime"/>
                                        <label for="item4"> Anime</label><br/><br/>
                                </div>
                            </div>
                            <div className="col-2-2">
                                <h3>Price:</h3>
                                 <div className="textSize">
                                     <input type="checkbox" id="item5" name="item5" value="<$25" />
                                         <label for="item5"> under $25 </label><br />
                                     <input type="checkbox" id="item6" name="item6" value="$25-$50" />
                                         <label for="item6"> $25-$50 </label><br />
                                     <input type="checkbox" id="item7" name="item7" value=">$100" />
                                         <label for="item7"> over $100 </label><br /><br />
                                 </div>
                            </div>
                            <input className="input" type="submit" value="Submit"/>
                        </div>
                        <br /><br /><br /><br />
                        <div className ="bottom">
                            <Link to="/ThreeEx"><h3>Three.js Example</h3></Link>
                        </div>
                    </div>

                    <div className="main">
                        <div className="row2">
       
                            <article className="col-1">
                                <div className="card">
                                    <Canvas className="canvas">
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                                        <Suspense fallback={null}>
                                            <Rubiks />
                                        </Suspense>
                                    </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                              <h2 className="col-1-1">Item Name</h2>
                                              <h2 className="col-2-1"> $0.00 </h2>
                                            <p className="col-3-1, textSize2">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum. </p>
                                              <button className="col-4-1"> Add to Cart </button>
                                          </div>
                                    </div>
                                </div>
                             </article>
                                
                            <article className="col-2">
                                <div className="card">
                                    <Canvas className="canvas">
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                                        <Suspense fallback={null}>
                                            <Drone />
                                        </Suspense>
                                    </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                             <h2 className="col-1-1">Item Name</h2>
                                             <h2 className="col-2-1"> $0.00 </h2>
                                            <p className="col-3-1, textSize2">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum.</p>
                                             <button className="col-4-1"> Add to Cart </button>
                                         </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-3">
                                <div className="card">
                                    <Canvas className="canvas">
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                                        <Suspense fallback={null}>
                                            <Mug />
                                        </Suspense>
                                    </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                             <h2 className="col-1-1">Item Name</h2>
                                             <h2 className="col-2-1"> $0.00 </h2>
                                            <p className="col-3-1, textSize2">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum.</p>
                                             <button className="col-4-1"> Add to Cart </button>
                                         </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-4">
                                <div className="card">
                                    <Canvas className="canvas">
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                                        <Suspense fallback={null}>
                                            <USBDrive />
                                        </Suspense>
                                    </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                             <h2 className="col-1-1">Item Name</h2>
                                             <h2 className="col-2-1"> $0.00 </h2>
                                            <p className="col-3-1, textSize2">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum.</p>
                                             <button className="col-4-1"> Add to Cart </button>
                                         </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-5">
                                <div className="card">
                                    <Canvas className="canvas">
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                                        <Suspense fallback={null}>
                                            <Rccar />
                                        </Suspense>
                                    </Canvas>
                                    <div className="container">
                                        <div className="row3">
                                            <h2 className="col-1-1">Item Name</h2>
                                            <h2 className="col-2-1"> $0.00 </h2>
                                            <p className="col-3-1, textSize2">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum.</p>
                                            <button className="col-4-1"> Add to Cart </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-6">
                                <div className="card">
                                    <Canvas className="canvas">
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                                        <Suspense fallback={null}>
                                            <MCPlank />
                                        </Suspense>
                                    </Canvas>
                                    <div className="container">
                                        <div className="row3">
                                            <h2 className="col-1-1">Item Name</h2>
                                            <h2 className="col-2-1"> $0.00 </h2>
                                            <p className="col-3-1, textSize2">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum.</p>
                                            <button className="col-4-1"> Add to Cart </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-7">
                                <div className="card">
                                    <Canvas className="canvas">
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                                        <Suspense fallback={null}>
                                            <Box2 />
                                        </Suspense>
                                    </Canvas>
                                    <div className="container">
                                        <div className="row3">
                                            <h2 className="col-1-1">Item Name</h2>
                                            <h2 className="col-2-1"> $0.00 </h2>
                                            <p className="col-3-1, textSize2">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum.</p>
                                            <button className="col-4-1, disabled"> Add to Cart </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p className="textSize2">contact us at: <a href="#" target="_blank">Name@Emerch.com</a></p>
                    <p className="textSize2">Click here to subscribe to email letter: <a href="#" target="_blank">subscribe</a></p>
                </div>
            </div>
    </>
  );
}