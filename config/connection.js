// Dependencies
var mysql = require('mysql');

// Connection to mysql
var connection;

// Jaws DB since using heroku deploy
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3036,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
};

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to database as ' + connection.threadID);
});

// Connection export
module.exports = connection;
