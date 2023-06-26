import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

// Définir le composant Footer
const Footer = () => {
    // Rendre le JSX pour le composant
    return (
        <div className="footer-container">
            <footer className="footer">

                {/* Section pour le texte du pied de page */}
                <div className="footer-text">
                    <p>Thomas<span>.</span>B</p>
                </div>

                {/* Section pour les icônes des médias sociaux */}
                <div className="footer-icons">
                    <Link to="https://github.com/thomas370"><FontAwesomeIcon icon={faGithub} className="icon" /></Link>
                    <Link to="https://www.linkedin.com/in/thomas-bortolato/"><FontAwesomeIcon icon={faLinkedin} className="icon" /></Link>
                    <Link to="https://discord.gg/Eruk4Vwrur"><FontAwesomeIcon icon={faDiscord} className="icon" /></Link>
                </div>

                {/* Section pour la navigation du pied de page */}
                <div className="footer-nav">
                    <ul>
                        {/*faire une encre pour chauque section */}
                        <li><a href="#Home">Accueil</a></li>
                        <li><a href="#About">A propos</a></li>
                        <li><a href="#Skills">Compétences</a></li>
                        <li><a href="#Projects">Projets</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>

                {/* Section pour le copyright */}
                <div className="footer-copyright">
                    <p>Copyright © 2023 thomasbortolato.fr, developer full-stack </p>
                </div>

            </footer>
        </div>
    );
};

// Exporter le composant Footer par défaut
export default Footer;