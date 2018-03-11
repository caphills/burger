// required dependencies
var mysql = require("mysql");

// Create the mySQL connection object: for Heroku (JAWSDB) and local on localhost
var connection;
//  for Heroku DB 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
        connection = mysql.createConnection({
            port: 3306,
            host: "localhost",
            user: "root",
            password: "joyjoy72",
            database: "burgers_db"
        })
};
// make the connection to mysql
connection.connect(function(err) {
  if (err) {
    console.log("error: mysql connection error -- " + err.stack);
    return;
  }
  console.log("connected to mysql database as id " + connection.threadId);
});

// export connection for the ORM
module.exports = connection;

