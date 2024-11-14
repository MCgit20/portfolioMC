import './index.css';
import lkdin from '../image/linkedin.png';
import gthub from '../image/github.png';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message envoyé avec succès!');
            } else {
                alert('Échec de l\'envoi du message.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'envoi du message.');
        }
    };

    return (
        <div id="contact">
            <h1 className="pagetitle">Contactez moi</h1>
            <span className="contactdesc">Veuillez remplir le formulaire ci-dessous pour discuter de toute opportunité de travail</span>
            <form className="contactform" onSubmit={handleSubmit}>
                <input type="text" name="name" className="name" placeholder="Votre nom" onChange={handleChange} />
                <input type="email" name="email" className="email" placeholder="Votre mail" onChange={handleChange} />
                <textarea name="message" className="message" rows="5" placeholder="Votre message" onChange={handleChange} />
                <button type="submit" className="submitbtn">Envoyer</button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/make-chen-604151254/"><img src={lkdin} alt="LinkedIn" className="link" /></a>
                    <a href="https://github.com/MCgit20"><img src={gthub} alt="GitHub" className="link" /></a>
                </div>
            </form>
        </div>
    );
}

export default Contact;
