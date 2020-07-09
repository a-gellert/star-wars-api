import React from 'react';

import './header.css';

const Header = () => {

    return (
        <header>
            <div className="header-logo">
                Star DB
                </div>
            <div className="header-item">
                <a href="/">People</a>
            </div>
            <div className="header-item">
                <a href="/">Planets</a>
            </div>
            <div className="header-item">
                <a href="/">Starships</a>
            </div>
        </header>
    );
}

export default Header;