const transporter = require('../config/mailer');

exports.sendEmail = (to, subject, html, attachments) => {
    const mailOptions = {
        from: 'Your Email <your-email@example.com>',
        to,
        subject,
        html,
        attachments,
    };

    return transporter.sendMail(mailOptions);
};