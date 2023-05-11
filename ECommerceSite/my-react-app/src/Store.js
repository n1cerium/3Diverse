
import React, { Suspense, useEffect } from 'react';
import './Store.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Box2 from "./component/Box2";
import Rubiks from "./component/products/Rubiks";
import Drone from "./component/products/Drone";
import Mug from "./component/products/Mug";
import MCPlank from "./component/products/MCPlank";
import USBDrive from "./component/products/USBDrive";
import Keyboard from "./component/products/Keyboard";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './ThreeEx.css';


export default function Store() {
    const ItemName = React.useRef([]);
    const ItemDescription = React.useRef([]);
    const ItemPrice = React.useRef([]);
    const [ItemInfo, SetInfo] = React.useState({});
    
    const handleClick = (val, e) => {
        const price = ItemPrice.current[val].innerHTML.slice(1);
        const infos = {
            i_Name : ItemName.current[val].innerHTML,
            i_Description : ItemDescription.current[val].innerHTML,
            i_Price : parseFloat(price)
        }
        SetInfo(infos);
        
        
        axios.post('http://localhost:8080/shop', ItemInfo).then(res => {
            if(res.data === "Success") {
                console.log("Successfully added to the cart");
            } else {
                console.log("Failed adding item to the cart")
            }
        });
    }

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
                                    <div className="description">
                                        <div className="descriptionCol1">
                                            <h2 ref = {el => ItemName.current[0] = el}>Rubiks Cube</h2>
                                            <p ref = {el => ItemDescription.current[0] = el}>The Original 3x3 Cube 3D Puzzle Fidget Cube Stress Relief Fidget Toy Brain. </p>
                                        </div>
                                        <div className="descriptionCol2">
                                            <h2 ref={el => ItemPrice.current[0] = el}>$13.99</h2>
                                            <button onClick={() => handleClick(0)}> Add to Cart </button>
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
                                    <div className="description">
                                        <div className="descriptionCol1">
                                            <h2 ref = {el => ItemName.current[1] = el}>HS Drone</h2>
                                            <p ref = {el => ItemDescription.current[1] = el}>GPS Drone with 4K Camera; FPV Quadcopter with Brushless Motor; Smart Return Home.</p>
                                            {/* <p>GPS Drone with 4K EIS UHD 130 FOV Camera for Adults Beginner, FPV Quadcopter with Brushless Motor, 2 Batteries 46 Min Flight Time, 5GHz Transmission, Smart Return Home.</p> */}
                                        </div>
                                        <div className="descriptionCol2">
                                            <h2 ref={el => ItemPrice.current[1] = el}>$269.99</h2>
                                            <button onClick={() => handleClick(1)}> Add to Cart </button>
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
                                    <div className="description">
                                        <div className="descriptionCol1">
                                            <h2 ref = {el => ItemName.current[2] = el}>Mug</h2>
                                            <p ref = {el => ItemDescription.current[2] = el}>Ceramic-Coated, Dishwasher & Microwave Safe Mug, 12 fl oz.</p>
                                        </div>
                                        <div className="descriptionCol2">
                                            <h2 ref={el => ItemPrice.current[2] = el}>$4.99</h2>
                                            <button onClick={() => handleClick(2)}> Add to Cart </button>
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
                                    <div className="description">
                                        <div className="descriptionCol1">
                                            <h2 ref = {el => ItemName.current[3] = el}>USB Drive</h2>
                                            <p ref = {el => ItemDescription.current[3] = el}>64GB High Performance USB 3.2 Metal Flash Drive | Speeds up to 200MB/s.</p>
                                        </div>
                                        <div className="descriptionCol2">
                                            <h2 ref={el => ItemPrice.current[3] = el}>$7.99</h2>
                                            <button onClick={() => handleClick(3)}> Add to Cart </button>
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
                                            <MCPlank />
                                        </Suspense>
                                    </Canvas>
                                    <div className="description">
                                        <div className="descriptionCol1">
                                            <h2 ref = {el => ItemName.current[4] = el}>MineCraft Plank</h2>
                                            <p ref = {el => ItemDescription.current[4] = el}>MineCraft Plank Light, Battery Powered.</p>
                                        </div>
                                        <div className="descriptionCol2">
                                            <h2 ref={el => ItemPrice.current[4] = el}>$25.99</h2>
                                            <button onClick={() => handleClick(4)}> Add to Cart </button>
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
                                            <Keyboard />
                                        </Suspense>
                                    </Canvas>
                                    <div className="description">
                                        <div className="descriptionCol1">
                                            <h2 ref = {el => ItemName.current[5] = el}>Keyboard</h2>
                                            <p ref = {el => ItemDescription.current[5] = el}>Wireless keyboard that works on various devices. Long-lasting rechargable battery. Splash proof design.</p>
                                        </div>
                                        <div className="descriptionCol2">
                                            <h2 ref={el => ItemPrice.current[5] = el}>$18.99</h2>
                                            <button onClick={() => handleClick(5)}> Add to Cart </button>
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