// import the ORM
var orm = require("../config/orm.js");
// create burger object
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {

    })     
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
     
    })
  }
}


// export db functions for the burgerController.js
module.exports = burger;

