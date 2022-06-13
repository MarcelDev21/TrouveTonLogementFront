import React from 'react';
import './Footer.css'
import logo from '../images/logo.jpeg'

const Footer = () => {
    return (
        <div className="monFooter">
            <div>
                 <h1 className="monNameFooter">Trouve ton Logement</h1>
            </div>
            <div>
                 {/* <h5>logo</h5> */}
                <img src={logo} alt="logoChambre" className="logoFooter"/>
             </div>
            {/* <h1 className="monNameFooter">Mon footer</h1>
            <h1 className="monNameFooter">Mon footer</h1> */}
        </div>
    );
};

export default Footer;