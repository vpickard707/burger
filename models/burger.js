// // Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file
var burger = {
  //Select all burgers from database
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  //Create function to create/add a burger
  //The variables cols and vals are arrays
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  //Update function to update burger devoured state
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  //Delete function to throw away/delete burger from database
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};
// Export
module.exports = burger;
