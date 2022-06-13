import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const NavLinks = () => {
    return (
        <ul className="mesUl">
            <li><Link to="/Login" className="mesLinks">Se Connecter </Link></li> 
        </ul>
    );
};

export default NavLinks;