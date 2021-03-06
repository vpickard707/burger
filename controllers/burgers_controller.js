// // Inside the burgers_controller.js file, import the following:
// Express
// burger.js

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create the routes for the app, and export the routes at the end of your file

// the JS object/data which is getting passed to view engine (handlebars)
// Handlebars renders html file index.handlebars and renders the object burgers
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function () {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (data) {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
