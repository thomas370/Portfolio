import React from 'react';
import './header.scss';
const Header = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="./logo_thomas.png" alt="Logo" />
                </div>
                <div className="text">
                    <h1>Bonjour, je m'appelle <span>Thomas !</span></h1>
                    <p>Développeur web full-stack</p>
                </div>
                <div className="buttons">
                    <button>Mon CV</button>
                    <button>Me contacter</button>
                </div>
            </header>
        </div>
    );
};

export default Header;