import React from 'react';
import './header.scss';

const Header = () => {
    const scrollTo = (e) => {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
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
            <div className="planet planet-5">
                <img src="./planete_5.png" alt="planete_5"/>
            </div>
            <div className="planet planet-6">
                <img src="./planete_6.png" alt="planete_6"/>
            </div>
            <div className="planet planet-7">
                <img src="./planete_7.png" alt="planete_7"/>
            </div>
            <header id="Home">
                <div className="logo">
                    <img src="./logo_thomas.png" alt="Logo" />
                </div>
                <div className="text">
                    <h1>Bonjour, je m'appelle <span>Thomas !</span></h1>
                    <p>Développeur web full-stack</p>
                </div>
                <div className="buttons">
                    {/*quand ont click sa telecharge le cv*/}
                   <button> <a href="./CV.pdf" download="CV.pdf">Télécharger mon CV</a></button>
                    {/*quand ont click sa scroll vers le bas*/}
                    <button><a href="#Contact" onClick={scrollTo}>Me contacter</a></button>
                </div>
                <div className="scrollcenter" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}>
                    <div className="scroll" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}></div>
                    <div className="scroll2" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}></div>
                </div>
            </header>
        </div>
    );
};

export default Header;