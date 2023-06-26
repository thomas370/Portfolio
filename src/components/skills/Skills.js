import React from 'react';
import './skills.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom";
const cardData = [
    [
        { title: 'Javascript', logo: './javascript.png', color: '#ecde6f', redirect: 'https://www.javascript.com/' },
        { title: 'HTML 5', logo: './html.png', color: '#f88b6d', redirect: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
        { title: 'CSS 3', logo: './css.png', color: '#399ae1', redirect: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
        { title: 'React', logo: './react.png', color: '#7bdbf5', redirect: 'https://fr.reactjs.org/' },
        { title: 'Sass', logo: './sass.png', color: '#ec9ec6', redirect: 'https://sass-lang.com/' },
    ],
    [
        { title: 'Github', logo: './github.png',color: '#858484', redirect: 'https://https://github.com/thomas370'  },
        { title: 'MySQL', logo: './mysql.png', color: '#4479A1', redirect: 'https://www.mysql.com/fr/' },
        { title: 'Php', logo: './php.png', color: '#777BB4', redirect: 'https://www.php.net/' },
        { title: 'Symfony', logo: './symfony.png', color: '#575757', redirect: 'https://symfony.com/' },
        { title: 'Api-platform', logo: './apiplatform.png', color: '#21759B', redirect: 'https://api-platform.com/' },
    ],
    // Ajoutez d'autres groupes de cartes si nécessaire
];
const Skills = () => {
    return (
        <div>
            <section className="section-skills" id='Skills'>
                <div className="skills">
                    <div className="titre">
                        <h2>Compétences<span>.</span></h2>
                    </div>
                    <Carousel showThumbs={false} emulateTouch showStatus={false} showIndicators={true} verticalSwipe={"natural"} centerSlidePercentage={100} centerMode={true} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1000} stopOnHover={false} swipeable={true} dynamicHeight={true} >
                        {cardData.map((group, index) => (
                            <div className="container" key={index}>
                                {group.map((card, index) => (
                                    <Link to={card.redirect}><div className="card" key={index} style={{ backgroundColor: card.color }}>
                                        <img src={card.logo} alt={card.title} /> {/* Ajout de l'image ici */}
                                        <h3>{card.title}</h3>
                                    </div></Link>
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
