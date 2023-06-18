import React from 'react';
import './skills.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const cardData = [
    [
        { title: 'Javascript', logo: './javascript.png', color: '#ecde6f' },
        { title: 'html 5', logo: './html.png', color: '#f88b6d' },
        { title: 'css 3', logo: './css.png', color: '#399ae1' },
        { title: 'react', logo: './react.png', color: '#7bdbf5' },
        { title: 'sass', logo: './sass.png', color: '#ec9ec6' },
    ],
    [
        { title: 'github', logo: './github.png',color: '#858484' },
        { title: 'mySQL', logo: './mysql.png', color: '#4479A1' },
        { title: 'php', logo: './php.png', color: '#777BB4' },
        { title: 'Symfony', logo: './Symfony.png', color: '#575757' },
        { title: 'api-platform', logo: './apiplatform.png', color: '#21759B' },
    ],
    // Ajoutez d'autres groupes de cartes si nécessaire
];
const Skills = () => {
    return (
        <div>
            <section className="section-skills">
                <div className="skills">
                    <div className="titre">
                        <h2>Skills<span>.</span></h2>
                    </div>
                    <Carousel showThumbs={false} emulateTouch showStatus={false} showIndicators={true}>
                        {cardData.map((group, index) => (
                            <div className="container" key={index}>
                                {group.map((card, index) => (
                                    <div className="card" key={index} style={{ backgroundColor: card.color }}>
                                        <img src={card.logo} alt={card.title} /> {/* Ajout de l'image ici */}
                                        <h3>{card.title}</h3>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Skills;
