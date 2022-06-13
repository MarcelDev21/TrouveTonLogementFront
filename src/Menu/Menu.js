import React from 'react';
import MobileNavigation from './MobileNavigation';
import NormalNavigation from './NormalNavigation';

const Menu = () => {
    return (
        <div>
            <MobileNavigation/>
            <NormalNavigation/>
        </div>
    );
};

export default Menu;