import React, { useState } from 'react';
import './contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        // Créer l'URL du lien mailto avec les données du formulaire
        const mailtoLink = `mailto:thomasbortolato5@gmail.com?subject=Nouveau message&body=Nom: ${name}%0DEmail: ${email}%0DMessage: ${message}`;

        // Ouvrir le lien mailto dans une nouvelle fenêtre/onglet
        window.open(mailtoLink, '_blank');
    };

    return (
        <div>
            <section className="section-contact" id='Contact'>
                <div className="contact">
                    <div className="titre">
                        <h2>Me contacter<span>.</span></h2>
                    </div>
                </div>
                <div className="contactInfo">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Votre Nom" value={formData.name} onChange={handleChange} required/>
                        <input type="email" name="email" placeholder="Votre Email" value={formData.email} onChange={handleChange} required/>
                        <textarea name="message" placeholder="Votre Message" value={formData.message} onChange={handleChange} required/>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;