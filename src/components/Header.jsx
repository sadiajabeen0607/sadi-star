import React from 'react';
import '../styles/header.css';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
        <h1>Sadi~Star.</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/contacts"}>Contact</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
        </main>
    </nav>
  )
}

export default Header