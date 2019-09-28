var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

if(process.env.NODE_ENV === "production"){
    connection = mysql.createConnection({
        use_env_variable: process.env.JAWSDB_URL
    });
}


connection.connect(function(err)  {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
