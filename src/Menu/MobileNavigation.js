import React from 'react';
import NavLinks from './NavLinks';
import './Menu.css'

const MobileNavigation = () => {
    return (
        <nav className="mobileNavigation">
            <NavLinks/>
        </nav>
    );
};

export default MobileNavigation;