const dotenv = require('dotenv').config();
const mysql = require('mysql');

let connection;

connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME
});

connection.connect(error => {
    if(error) throw error;
    console.log('Bien connecte à la BDD.');

})

module.exports = connection;