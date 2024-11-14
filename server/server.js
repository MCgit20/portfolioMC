// Importer les modules nécessaires
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();
const PORT = 3001;

// Permettre le CORS pour les requêtes de votre client React
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

// Route pour traiter l'envoi de formulaire
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
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email envoyé avec succès!');
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
