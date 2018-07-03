import React from 'react';
import leaf from '../assets/Palmier1-White.png';

import '../styles/Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <img src={leaf} className="app-logo" alt="leaf logo" />
            <h1 className="app-title"> Grid of Users</h1>
        </header>
    );
} 

export default Header;