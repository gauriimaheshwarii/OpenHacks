import React, { useState } from 'react';
import './navbar.css';
import { useScroll, useMotionValueEvent } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

    const [latestScroll, setLatestScroll] = useState(null);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest);
        setLatestScroll(latest);
    })

    return (
        <>
            <nav
                style={
                    (latestScroll > 100 || props.isStore === true) ? { position: "sticky", top: 0, left: 0, backgroundColor: "rgba(255, 255, 255, 0.4)", backdropFilter: "blur(5px)", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }
                        :
                        { position: "fixed", top: 0, left: 0 }
                }
            >
                <div className='nav-heading-container'>
                    <span className='nav-heading-span1'>Eco</span>
                    <span
                        className='nav-heading-span2'
                        style={
                            (latestScroll > 100 || props.isStore === true) ? { color: "black" }
                                :
                                { color: "white" }
                        }
                    >Circle</span>
                </div>
                <div className='nav-links-account-container'>
                    <div className='nav-links-container'>

                        <NavLink to="/" end style={{textDecoration: "none"}}><span
                            style={
                                (latestScroll > 100 || props.isStore === true) ? { color: "black" }
                                    :
                                    { color: "white" }
                            }
                        >Home</span>
                        </NavLink>

                        <NavLink to="/store" end style={{textDecoration: "none"}}><span
                            style={
                                (latestScroll > 100 || props.isStore === true) ? { color: "black" }
                                    :
                                    { color: "white" }
                            }
                        >Store</span>
                        </NavLink>

                        <NavLink to="/api" end style={{textDecoration: "none"}}><span
                            style={
                                (latestScroll > 100 || props.isStore === true) ? { color: "black" }
                                    :
                                    { color: "white" }
                            }
                        >Api</span>
                        </NavLink>

                        {/* <NavLink to="/#contact" end><span
                            style={
                                (latestScroll > 100 || props.isStore === true) ? { color: "black" }
                                    :
                                    { color: "white" }
                            }
                        >Contact Us</span>
                        </NavLink> */}
                    </div>
                    {/* <div className='nav-account-container'> */}
                        {/* <button className='nav-account-button-sign-in'>Sign In</button> login BUTTON */}
                        {/* <button className='nav-account-button-sign-up'>Sign Up</button> REGISTER BUTTON */}
                    {/* </div> */}
                </div>
            </nav >
        </>
    )
}

export default Navbar;