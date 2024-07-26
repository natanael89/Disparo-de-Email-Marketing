const connection = require('../config/database');

const Email = {
    create: ({ email, name}) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO emails (email, name) VALUES (?, ?';
            connection.query(query, [email, name], (err, results) => {
                if (err) return reject(err);
                resolve({id: results.insertId, email, name});
            });
        });
    },
};

module.exports = Email;