
import React, { Suspense, useRef } from 'react';
import './Store.css';
import { Link } from 'react-router-dom';

import Rubiks from "./component/products/Rubiks";
import Drone from "./component/products/Drone";
import Mug from "./component/products/Mug";
import MCPlank from "./component/products/MCPlank";
import USBDrive from "./component/products/USBDrive";
import Keyboard from "./component/products/Keyboard";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


export default function Store() {
    const sidebarTypeListRef = useRef(null);
    const sidebarPriceListRef = useRef(null);

    const sidebarOptionClick = (filterOption) => {
        if(filterOption == "type") {
            if(sidebarTypeListRef.current.style.display == "block") {
                sidebarTypeListRef.current.style.display = "none";
            } else {
                sidebarTypeListRef.current.style.display = "block";
            }
        } else if(filterOption == "price") {
            if(sidebarPriceListRef.current.style.display == "block") {
                sidebarPriceListRef.current.style.display = "none";
            } else {
                sidebarPriceListRef.current.style.display = "block";
            }
        }
    }

    return (
    <>
            <div className="body">
                <div className="header">
                    <div className="logo">
                        <h1>3Diverse</h1>
                    </div>
                    <div className="navbar">
                        <div className="navbarMenu">
                            <Link to="/Login"><h3>Login</h3></Link>
                            <Link to="/Cart"><h3>Cart</h3></Link>
                        </div>
                    </div>
                </div>
                
                <div className="mainBody">
                    <div className="sidebar">
                        <h2>Filters</h2>

                        <div className="sidebarMenu">
                            <h3 id="sidebarTypeBtn" onClick={() => sidebarOptionClick("type")}>Type</h3>
                            <ul ref={sidebarTypeListRef}>
                                <li>
                                    <input type="checkbox" id="item1" name="item1" value="Clothes"/>
                                    <label for="item1"> Clothes</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="item2" name="item2" value="Food"/>
                                    <label for="item2"> Food</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="item3" name="item3" value="Toys" />
                                    <label for="item3"> Toys</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="item4" name="item4" value="Anime"/>
                                    <label for="item4"> Anime</label>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebarMenu">
                            <h3 id="sidebarPriceBtn" onClick={() => sidebarOptionClick("price")}>Price</h3>
                            <ul ref={sidebarPriceListRef}>
                                <li>
                                    <input type="checkbox" id="item5" name="item5" value="<$25" />
                                    <label for="item5"> Under $25 </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="item6" name="item6" value="$25-$50" />
                                    <label for="item6"> $25 to $50 </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="item7" name="item7" value=">$100" />
                                    <label for="item7"> $50 Above </label>
                                </li>
                            </ul>
                        </div>

                        {/* <div className ="bottom">
                            <Link to="/ThreeEx"><h3>Three.js Example</h3></Link>
                        </div> */}
                    </div>

                    <div className="products">
                        <div className="productItem1">
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
                                        <h2>Rubiks Cube</h2>
                                        <p>The Original 3x3 Cube 3D Puzzle Fidget Cube Stress Relief Fidget Toy Brain. </p>
                                    </div>
                                    <div className="descriptionCol2">
                                        <h2> $13.99 </h2>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                                
                        <div className="productItem2">
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
                                        <h2>HS Drone</h2>
                                        <p>GPS Drone with 4K Camera; FPV Quadcopter with Brushless Motor; Smart Return Home.</p>
                                        {/* <p>GPS Drone with 4K EIS UHD 130 FOV Camera for Adults Beginner, FPV Quadcopter with Brushless Motor, 2 Batteries 46 Min Flight Time, 5GHz Transmission, Smart Return Home.</p> */}
                                    </div>
                                    <div className="descriptionCol2">
                                        <h2> $269.99 </h2>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="productItem3">
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
                                        <h2>Mug</h2>
                                        <p>Ceramic-Coated, Dishwasher & Microwave Safe Mug, 12 fl oz.</p>
                                    </div>
                                    <div className="descriptionCol2">
                                        <h2> $4.99 </h2>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="productItem4">
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
                                        <h2>USB Drive</h2>
                                        <p>64GB High Performance USB 3.2 Metal Flash Drive | Speeds up to 200MB/s.</p>
                                    </div>
                                    <div className="descriptionCol2">
                                        <h2> $7.99 </h2>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="productItem5">
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
                                        <h2>MineCraft Plank</h2>
                                        <p>MineCraft Plank Light, Battery Powered.</p>
                                    </div>
                                    <div className="descriptionCol2">
                                        <h2> $25.99 </h2>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="productItem6">
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
                                        <h2>Keyboard</h2>
                                        <p>Wireless keyboard that works on various devices. Long-lasting rechargable battery. Splash proof design.</p>
                                    </div>
                                    <div className="descriptionCol2">
                                        <h2> $18.99 </h2>
                                        <button> Add to Cart </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="logo">
                        <h1>3Diverse</h1>
                    </div>
                    <p>Contact us at: <a href="#" target="_blank">support@3Diverse.com</a></p>
                    <p><a href="#" target="_blank">Subscribe to our newsletter</a></p>
                    <p className="copyright">© 2023 3Diverse </p>
                </div>
            </div>
    </>
  );
}