//3 paso connecion
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'usuario'
});

connection.connect((err)=> {
    if (err) {
        console.log('db is not connected')
        console.log(err)
        return
    } else {
        console.log('db is connected')
    }
});

module.exports = connection;