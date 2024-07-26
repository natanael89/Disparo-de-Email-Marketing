const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '8626#',
    database: 'disparo_email'  // Nome do seu banco de dados
    
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to the MySQL server.');
})

module.exports = connection;