//Config options for database

const mysql = require('mysql2/promise');

 const connection = mysql.createPool({
    host: '34.68.209.201',
    user: 'csc648',
    password: 'sithlord',
    database: 'appDB',
    waitForConnections: true,
    connectionLimit: 15,
    queueLimit: 0
  });

module.exports = connection;