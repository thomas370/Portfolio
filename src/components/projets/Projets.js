import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './projets.scss';
import {Link} from "react-router-dom";

const Projets = () => {
    const [filter, setFilter] = useState('Tous');

    const [projets, setProjets] = useState([
        { name: 'Portfolio photographie', category: 'Wordpress', image: './projet_2.png' },
        { name: 'Jeux-flex', category: 'Symfony', image: './projet_1.png', redirect: "https://github.com/thomas370/jeux-flex" },
        { name: 'Portfolio', category: 'React', image: './projet_4.png', redirect: "https://github.com/thomas370/portfolio" },
    ]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    }

    return (
        <div>
            <section className='section-projet' id="Projects">
                <div className="projet">
                    <div className="titre">
                        <h2>Projets<span>.</span></h2>
                    </div>
                    <div className="filtre">
                        <button onClick={() => handleFilterChange('Tous')} className="btn-filtre">Tous</button>
                        <button onClick={() => handleFilterChange('React')} className="btn-filtre">React</button>
                        <button onClick={() => handleFilterChange('Symfony')} className="btn-filtre">Symfony</button>
                        <button onClick={() => handleFilterChange('Wordpress')} className="btn-filtre">Wordpress</button>
                    </div>
                </div>
                <div className="container-global">
                    <Flipper flipKey={filter} className="flipper-container">
                        {
                            projets
                                .filter(projet => filter === 'Tous' || projet.category === filter)
                                .map(projet => (
                                    <Flipped key={projet.name} flipId={projet.name}>
                                        <Link to={projet.redirect} target={"_blank"}><div className="card">
                                            <h3>{projet.name}</h3>
                                            <img src={projet.image} alt={projet.name} />
                                        </div></Link>
                                    </Flipped>
                                ))
                        }
                    </Flipper>
                </div>
            </section>
        </div>
    );
};

export default Projets;