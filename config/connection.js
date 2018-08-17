var mysql = require("mysql");
require('dotenv').config();
var password = process.env.DB_PASSWORD;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("Unable to currently connect.\nPlease check your password.");
      return;
 }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;