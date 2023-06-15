import React from 'react';
import './home.scss';

import Header from "../../components/header/Header";
import Apropos from "../../components/apropos/Apropos";
import Experiences from "../../components/experiences/Experiences";
import Skills from "../../components/skills/Skills";
import Projets from "../../components/projets/Projets";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
const Home = () => {
    return (
        <div>
            <Header />
            <Apropos />
            <Experiences />
            <Skills />
            <Projets />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;