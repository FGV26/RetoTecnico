
const mysql = require('mysql2'); 
const dotenv = require('dotenv');

dotenv.config(); //Colocar puertos en ENV

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306', 
    database: process.env.DB_NAME ||'task', 
    user: process.env.DB_USER || 'root', 
    password: process.env.DB_PASSWORD || 'admin'
});

connection.connect((err) => { 
    if (err) { 
        console.error('Error al conectarse a la Base de datos:', err.message);
    } else { 
        console.log('Conexión Exitosa'); 
    }
});

module.exports = connection ; 