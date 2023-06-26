import React from 'react';
import './apropos.scss';
const Apropos = () => {
    return (
        <div>
            <section className='section-apropos' id='About'>
                <div className="apropos">
                    <div className="titre">
                        <h2>A propos<span>.</span></h2>
                    </div>
                    <div className="sep">
                        <div className="txtapropos">
                            <p>Je suis <span>Thomas</span>, développeur web full-stack en alternance, spécialisé dans <span> React et Symfony</span>. Passionné par la création d'applications web intuitives, j'apporte mon expertise pour développer des expériences utilisateur de qualité. À la recherche de nouveaux projets stimulants, je suis disponible pour discuter de <span>votre projet.</span></p>
                        </div>
                        <div className="image">
                            <img src="./astro.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Apropos;