
import React, { Suspense } from 'react';
import './Store.css';
import { Link } from 'react-router-dom';
import Box2 from "./component/Box2";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './ThreeEx.css';


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
                        <h2><u>Filters</u></h2><br/>
                        <div className="row3">
                            <div className="col-1-2">
                                <h3>Type:</h3>
                                <div className = "textSize">
                                    <input type="checkbox" id="item1" name="item1" value="Clothes"/>
                                        <label for="item1"> Clothes</label><br/>
                                    <input type="checkbox" id="item2" name="item2" value="Food"/>
                                        <label for="item2"> Food</label><br/>
                                    <input type="checkbox" id="item3" name="item3" value="Anime"/>
                                        <label for="item3"> Anime</label><br/><br/>
                                </div>
                            </div>
                            <div className="col-2-2">
                                <h3>Price:</h3>
                                 <div className="textSize">
                                     <input type="checkbox" id="item4" name="item4" value="<$25" />
                                         <label for="item4"> under $25 </label><br />
                                     <input type="checkbox" id="item5" name="item5" value="$25-$50" />
                                         <label for="item5"> $25-$50 </label><br />
                                     <input type="checkbox" id="item6" name="item6" value=">$100" />
                                         <label for="item6"> over $100 </label><br /><br />
                                 </div>
                            </div>
                            <input className="input" type="submit" value="Submit"/>
                        </div>
                        <br /><br /><br /><br />
                        <div className ="bottom">
                            <Link to="/ThreeEx"><h2>Three.js Example</h2></Link>
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
                                             <Box2 />
                                         </Suspense>
                                     </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                              <h2 className="col-1-1">Item Name</h2>
                                              <h2 className="col-2-1"> $0.00 </h2>
                                              <p className="col-3-1">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum. Morbi ultrices, velit vel ultrices condimentum, purus lorem dignissim velit, eget gravida nibh risus in nunc. Nam tincidunt, libero ac fermentum accumsan, elit nulla</p>
                                              <button className="col-4-1, disabled"> Add to Cart </button>
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
                                             <Box2 />
                                         </Suspense>
                                     </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                             <h2 className="col-1-1">Item Name</h2>
                                             <h2 className="col-2-1"> $0.00 </h2>
                                             <p className="col-3-1">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum. Morbi ultrices, velit vel ultrices condimentum, purus lorem dignissim velit, eget gravida nibh risus in nunc. Nam tincidunt, libero ac fermentum accumsan, elit nulla</p>
                                             <button className="col-4-1, disabled"> Add to Cart </button>
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
                                             <Box2 />
                                         </Suspense>
                                     </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                             <h2 className="col-1-1">Item Name</h2>
                                             <h2 className="col-2-1"> $0.00 </h2>
                                             <p className="col-3-1">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum. Morbi ultrices, velit vel ultrices condimentum, purus lorem dignissim velit, eget gravida nibh risus in nunc. Nam tincidunt, libero ac fermentum accumsan, elit nulla</p>
                                             <button className="col-4-1, disabled"> Add to Cart </button>
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
                                             <Box2 />
                                         </Suspense>
                                     </Canvas>
                                    <div className="container">
                                         <div className="row3">
                                             <h2 className="col-1-1">Item Name</h2>
                                             <h2 className="col-2-1"> $0.00 </h2>
                                             <p className="col-3-1">Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor condimentum condimentum. Morbi ultrices, velit vel ultrices condimentum, purus lorem dignissim velit, eget gravida nibh risus in nunc. Nam tincidunt, libero ac fermentum accumsan, elit nulla</p>
                                             <button className="col-4-1, disabled"> Add to Cart </button>
                                         </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p>contact us at: <a href="#" target="_blank">Name@Emerch.com</a></p>
                    <p>Click here to subscribe to email letter: <a href="#" target="_blank">subscribe</a></p>
                </div>
            </div>
    </>
  );
}