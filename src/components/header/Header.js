import React from 'react';
import './header.scss';
const Header = () => {
    return (
        <div>
            <div className="planet planet-1">
                <img src="./planete_1.png" alt="planete_1"/>
            </div>
            <div className="planet planet-2">
                <img src="./planete_2.png" alt="planete_2"/>
            </div>
            <div className="planet planet-3">
                <img src="./planete_3.png" alt="planete_3"/>
            </div>
            <div className="planet planet-4">
                <img src="./planete_4.png" alt="planete_4"/>
            </div>
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