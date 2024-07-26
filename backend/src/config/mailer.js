const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro service de email
    auth: {
        user: 'your_email',
        pass: 'your_password' // Senha do email
    }
})

module.exports = transporter;