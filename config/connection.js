var mysql = require('mysql');
var connection = require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
};


connection.connect(function(err)  {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
