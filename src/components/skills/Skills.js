import React, { useState } from 'react';
import './skills.scss';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', image: './javascript.png', color: '#fae37f' },
        { name: 'React', image: './react.png', color: '#96E1F9'},
        { name: 'MySQL', image: './mysql.png', color: '#96E1F9' },
        { name: 'PHP', image: './php.png' , color: '#145478'},
        { name: 'Symfony', image: './symfony.png', color: '#424241' },
        { name: 'HTML', image: './html.png', color: '#96E1F9' },
        { name: 'CSS', image: './css.png', color: '#96E1F9' },
        { name: 'SASS', image: './sass.png', color: '#E3A1EE' },
        { name: 'GitHub', image: './github.png', color: '#96E1F9' },

        // Ajoutez autant de compétences que vous le souhaitez...
    ];

    // Grouper les compétences par 3 (ou autant que vous voulez par "diapositive")
    const groupedSkills = [];
    for (let i = 0; i < skills.length; i += 3) {
        groupedSkills.push(skills.slice(i, i + 3));
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = () => {
        setCurrentIndex((currentIndex + 1) % groupedSkills.length);
    };

    const goPrev = () => {
        setCurrentIndex((currentIndex - 1 + groupedSkills.length) % groupedSkills.length);
    };

    return (
        <div>
            <section>
                <div className="skills">
                    <div className="titre">
                        <h2>Skills<span>.</span></h2>
                    </div>
                    <div className="container">
                        <button onClick={goPrev}>Précédent</button>
                        <div className='cards'>
                            {groupedSkills[currentIndex] && groupedSkills[currentIndex].map(skill => (
                                <div className="card" key={skill.name} style={{backgroundColor: skill.color}}>
                                    <img src={skill.image} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                        <button onClick={goNext}>Suivant</button>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Skills;