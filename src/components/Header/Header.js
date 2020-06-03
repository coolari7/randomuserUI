import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'

const Header = (props) => (
    <nav className="header__wrapper">
        <a  href="/">
            <img src={logo} alt="logo" />
        </a>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">About</a></li>
        </ul>
        <a href="https://randomuser.me/">randomuser.me</a>
    </nav>
)

export default Header;