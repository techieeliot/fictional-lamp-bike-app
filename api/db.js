const con = require('mysql').createConnection({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'glowing-robot-biker-app',
    multipleStatements: true
})

exports.con