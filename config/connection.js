//if we are on Heroku and the JawsDB addon is configured, we will have the environment variable JAWSDB_URL
//this variable will contain what mysql package needs to connect :)
require('dotenv').config();
var mysql = require('mysql');
var connection;
if(process.env.JAWSDB_URL) {  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //otherwise, we're going to use our local connection!  put your local db set stuff here
  //(and remember our best practice of using the dotenv package and a .env file ;)
  connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_DATABASE
  });
} 

    connection.connect();
    module.exports = connection;