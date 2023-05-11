import React, { Suspense, useRef, useState } from 'react';
import './Store.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Rubiks from "./component/products/Rubiks";
import Drone from "./component/products/Drone";
import Mug from "./component/products/Mug";
import MCPlank from "./component/products/MCPlank";
import USBDrive from "./component/products/USBDrive";
import Keyboard from "./component/products/Keyboard";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const productInfo = {
    product1 : {type : ["cube", "toy"], price : 13.99},
    product2 : {type : ["technology"], price : 269.99},
    product3 : {type : ["kitchenware"], price : 4.99},
    product4 : {type : ["technology"], price : 7.99},
    product5 : {type : ["cube", "toy", "technology"], price : 25.99},
    product6 : {type : ["technology"], price : 18.99}
}

export default function Store() {
    const ItemName = React.useRef([]);
    const ItemDescription = React.useRef([]);
    const ItemPrice = React.useRef([]);
    const [ItemInfo, SetInfo] = React.useState({});
    
    const handleClick = (val, e) => {
        const price = ItemPrice.current[val].innerHTML.slice(1);
        const infos = {
            c_User : sessionStorage.getItem("CurrentUser"),
            i_Name : ItemName.current[val].innerHTML,
            i_Description : ItemDescription.current[val].innerHTML,
            i_Price : parseFloat(price)
        }
        SetInfo(infos);
        
        console.log(infos);
        axios.post('http://localhost:8080/shop', ItemInfo).then(res => {
            if(res.data === "Success") {
                console.log("Successfully added to the cart");
            } else {
                console.log("Failed adding item to the cart")
            }
        });
    }
    /* Sidebar */
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

    const productItem1Ref = useRef(null);
    const productItem2Ref = useRef(null);
    const productItem3Ref = useRef(null);
    const productItem4Ref = useRef(null);
    const productItem5Ref = useRef(null);
    const productItem6Ref = useRef(null);

    const [sidebarType1Checked, setSidebarType1Checked] = useState(false);
    const [sidebarType2Checked, setSidebarType2Checked] = useState(false);
    const [sidebarType3Checked, setSidebarType3Checked] = useState(false);
    const [sidebarType4Checked, setSidebarType4Checked] = useState(false);

    const sidebarTypeCheckbox = (event, val) => {
        let check = 0;
        switch(val) {
            case 1:
                setSidebarType1Checked(event.target.checked);
                check = 0;
                break;
            case 2:
                setSidebarType2Checked(event.target.checked);
                check = 1;
                break;
            case 3:
                setSidebarType3Checked(event.target.checked);
                check = 2;
                break;
            default:
                setSidebarType4Checked(event.target.checked);
                check = 3;
                break;
        }
        filterProducts(check);
    }

    const [sidebarPrice1Checked, setSidebarPrice1Checked] = useState(false);
    const [sidebarPrice2Checked, setSidebarPrice2Checked] = useState(false);
    const [sidebarPrice3Checked, setSidebarPrice3Checked] = useState(false);
    
    const sidebarPriceCheckbox = (event, val) => {
        let check = 0;
        switch(val) {
            case 1:
                setSidebarPrice1Checked(event.target.checked);
                check = 4;
                break;
            case 2:
                setSidebarPrice2Checked(event.target.checked);
                check = 5;
                break;
            default:
                setSidebarPrice3Checked(event.target.checked);
                check = 6;
                break;
        }
        filterProducts(check);
    }

    function filterProducts(check) {
        let allProducts = {
            product1 : productItem1Ref,
            product2 : productItem2Ref,
            product3 : productItem3Ref,
            product4 : productItem4Ref,
            product5 : productItem5Ref,
            product6 : productItem6Ref
        };

        for(let product in allProducts) {
            allProducts[product].current.style.display = "block";
        }

        let checks = [
            sidebarType1Checked,
            sidebarType2Checked,
            sidebarType3Checked,
            sidebarType4Checked,
            sidebarPrice1Checked,
            sidebarPrice2Checked,
            sidebarPrice3Checked
        ];
        checks[check] = !checks[check];

        let returnNow = true;
        for(let x in checks) {
            if(checks[x] == true) {
                returnNow = false;
                break;
            }
        }
        if(returnNow) { return; }

        for(let product in productInfo) {
            /* type */
            if(checks[0]) {
                if(!productInfo[product].type.includes("cube")) {
                    allProducts[product].current.style.display = "none";
                }
            }
            if(checks[1]) {
                if(!productInfo[product].type.includes("toy")) {
                    allProducts[product].current.style.display = "none";
                }
            }
            if(checks[2]) {
                if(!productInfo[product].type.includes("technology")) {
                    allProducts[product].current.style.display = "none";
                }
            }
            if(checks[3]) {
                if(!productInfo[product].type.includes("kitchenware")) {
                    allProducts[product].current.style.display = "none";
                }
            }

            /* price */
            if(checks[4]) {
                if(productInfo[product].price >= 25) {
                    allProducts[product].current.style.display = "none";
                }
            }
            if(checks[5]) {
                if((productInfo[product].price < 25) || (productInfo[product].price >= 50)) {
                    allProducts[product].current.style.display = "none";
                }
            }
            if(checks[6]) {
                if(productInfo[product].price < 50) {
                    allProducts[product].current.style.display = "none";
                }
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

            <div className="mobileNavbar">
                <Link to="/Login"><h3>Login</h3></Link>
                <Link to="/Cart"><h3>Cart</h3></Link>
            </div>
            
            <div className="mainBody">
                <div className="sidebar">
                    <h2>Filters</h2>

                    <div className="sidebarMenuContainer">
                        <div className="sidebarMenu">
                            <h3 id="sidebarTypeBtn" onClick={() => sidebarOptionClick("type")}>Type</h3>
                            <ul ref={sidebarTypeListRef}>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="sidebarType1"
                                        name="sidebarType1"
                                        checked={sidebarType1Checked}
                                        onChange={(event) => sidebarTypeCheckbox(event, 1)}
                                        value="Cube"/>
                                    <label for="sidebarType1"> Cube</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="sidebarType2"
                                        name="sidebarType2"
                                        checked={sidebarType2Checked}
                                        onChange={(event) => sidebarTypeCheckbox(event, 2)}
                                        value="Toy"/>
                                    <label for="sidebarType2"> Toy</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="sidebarType3"
                                        name="sidebarType3"
                                        checked={sidebarType3Checked}
                                        onChange={(event) => sidebarTypeCheckbox(event, 3)}
                                        value="Technology" />
                                    <label for="sidebarType3"> Technology</label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="sidebarType4"
                                        name="sidebarType4"
                                        checked={sidebarType4Checked}
                                        onChange={(event) => sidebarTypeCheckbox(event, 4)}
                                        value="Kitchenware"/>
                                    <label for="sidebarType4"> Kitchenware</label>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebarMenu">
                            <h3 id="sidebarPriceBtn" onClick={() => sidebarOptionClick("price")}>Price</h3>
                            <ul ref={sidebarPriceListRef}>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="sidebarPrice1"
                                        name="sidebarPrice1"
                                        checked={sidebarPrice1Checked}
                                        onChange={(event) => sidebarPriceCheckbox(event, 1)}
                                        value="<$25" />
                                    <label for="sidebarPrice1"> Under $25 </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="sidebarPrice2"
                                        name="sidebarPrice2"
                                        checked={sidebarPrice2Checked}
                                        onChange={(event) => sidebarPriceCheckbox(event, 2)}
                                        value="$25-$50" />
                                    <label for="sidebarPrice2"> $25 to $50 </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="sidebarPrice3"
                                        name="sidebarPrice3"
                                        checked={sidebarPrice3Checked}
                                        onChange={(event) => sidebarPriceCheckbox(event, 3)}
                                        value=">$100" />
                                    <label for="sidebarPrice3"> $50 Above </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className ="bottom">
                        <Link to="/ThreeEx"><h3>Three.js Example</h3></Link>
                    </div>
                </div>

                <div className="products">
                    <div className="productItem1" ref={productItem1Ref}>
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
                                    <h2> ${productInfo.product1.price} </h2>
                                    <button> Add to Cart </button>
                                </div>
                            </div>
                        </div>
                    </div>
                            
                    <div className="productItem2" ref={productItem2Ref}>
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
                                    <h2> ${productInfo.product2.price} </h2>
                                    <button> Add to Cart </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="productItem3" ref={productItem3Ref}>
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
                                    <h2> ${productInfo.product3.price} </h2>
                                    <button> Add to Cart </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="productItem4" ref={productItem4Ref}>
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
                                    <h2> ${productInfo.product4.price} </h2>
                                    <button> Add to Cart </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="productItem5" ref={productItem5Ref}>
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
                                    <h2> ${productInfo.product5.price} </h2>
                                    <button> Add to Cart </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="productItem6" ref={productItem6Ref}>
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
                                    <h2> ${productInfo.product6.price} </h2>
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