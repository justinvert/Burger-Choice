var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
      res.redirect("/index");
  });

router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };

      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post('/', function(req,res) {
    burger.insertOne(
      ['name'],
      [req.body.name],
      function(data){
      res.redirect('/')
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
      devoured: true
  },
  condition, function() {

      // console.log(req.body);
      res.redirect("/");
  });
}); 


  module.exports = router;