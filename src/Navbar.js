import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Navbar() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix logo" />
            <img className="nav__avatar" src="https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883" alt="Netflix logo" />
        </div>
    )
}
