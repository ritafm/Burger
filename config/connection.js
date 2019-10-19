var mysql = require('mysql');
var connection = require('dotenv').config();

//added from devcenter.heroku.com troubleshooting article
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();



if (process.env.NODE_ENV === 'production') {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        host: 'edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'wb7c3ozrtqmxhb7v',
        password: 'acavrxupfvgnf7kd',
        database: 'skimqhpshyalrotz'
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
