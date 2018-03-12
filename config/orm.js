// need to require connection.js so the ORM can interract with the DB
var connection = require("./connection.js");

// Helper function for MySQL syntax
function printQuestionMarks(num) {
  var arr = [];
// for looping through
      for (var i = 0; i < num; i++) {
      arr.push("?");
      }
        return arr.toString();
}
  // Helper function for generating My SQL syntax 
  function objToSql(ob) {
      var arr = [];
      for (var key in ob) {
      arr.push(key + "=" + ob[key]);
      }
      return arr.toString();
}
  // ORM object to do the SQL queries
  var orm = {
  // function that returns all table entries
  selectAll: function(tableInput, cb) {
      var queryString = 'SELECT * FROM ' + tableInput + ';';
      connection.query(queryString, function(err, result) {
      cb(result);
		});
  },
  
  // function that insert a single table entry
  insertOne: function(table, cols, vals, cb) {

    // Construct the query string that inserts a single row into the target table
    var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        // console.log(queryString);

        // Perform the database query
    connection.query(queryString, vals, function(err, result) {
            if (err) {
                    throw err;
            }
            // Return results in callback
            cb(result);
    });
},
// Function that updates a single table entry
updateOne: function(table, objColVals, condition, cb) {
  // Construct the query string that updates a single entry in the target table
  var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  // console.log(queryString);
  
  // Perform the database query
  connection.query(queryString, function(err, result) {
          if (err) {
             throw err;
          }
         // Return results in callback
          cb(result);
       });
    }
};
// Export the orm object 
module.exports = orm;




