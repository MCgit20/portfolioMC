// Importer les modules nécessaires
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();
const PORT = 3001;

// Configurer CORS pour autoriser les requêtes depuis le client React
app.use(cors({
    origin: 'http://localhost:3000', // URL de votre client React
    methods: ['GET', 'POST'], // Méthodes HTTP autorisées
    allowedHeaders: ['Content-Type'] // En-têtes autorisés
}));

// Configurer le middleware pour traiter les données JSON
app.use(bodyParser.json());

// Configurer le transporteur pour l'envoi d'e-mails
const transporter = nodemailer.createTransport({
    service: 'gmail', // ou autre fournisseur d'email
    auth: {
        user: process.env.EMAIL, // Email à partir du fichier .env
        pass: process.env.EMAIL_PASSWORD // Mot de passe du fichier .env
    }
});

// Définir une route pour traiter les envois de formulaire
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL, // Envoyer à l'email configuré dans le fichier .env
        subject: `Nouveau message de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur d\'envoi:', error);
            return res.status(500).send('Erreur lors de l\'envoi de l\'email.');
        }
        console.log('Email envoyé:', info.response);
        res.status(200).send('Email envoyé avec succès!');
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
