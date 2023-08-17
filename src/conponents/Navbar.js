import React from 'react'
import { Link } from "react-router-dom";
import{HashLink} from "react-router-hash-link"
import '../styles/Navbar.css'
export default function Navbar() {
    return (
        <>
                <nav>
                    <h1>TechyStar.</h1>
                    <main>
                    <HashLink to="/#home">Home</HashLink>
                    <HashLink to="/#about">About</HashLink>
                    <Link to="/contact">Contact</Link>
                    <HashLink to="/#brands">Brands</HashLink>
                    <Link to="/services">Services</Link>
                    </main>
                </nav>
        </>
    )
}
