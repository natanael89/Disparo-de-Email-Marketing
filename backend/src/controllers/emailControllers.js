const Email = require('../models/email');
const emailService = require('../services/emailService');

exports.createEmail = async (req, res) => {
    const { email, name } = req.body;

    try {
        const newEmail = await Email.create({ email, name});
        res.status(201).json(newEmail);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}