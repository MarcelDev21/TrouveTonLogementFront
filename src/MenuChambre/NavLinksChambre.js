import React from 'react';
import { Link } from 'react-router-dom';
import './MenuChambre.css'

const NavLinksChambre = () => {
    return (
        <ul className="mesUlChambre">
            <li><Link to="/Login" className="mesLinksChambre">Login</Link></li>
        </ul>
    );
};

export default NavLinksChambre;