import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Netflix.jpg"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav;