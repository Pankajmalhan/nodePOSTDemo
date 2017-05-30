var express = require('express');
var router = express.Router();

var data=[
    {"name":"Pankaj Choudhary","age":21,"city":"alwar"},
    {"name":"Sandeep Jangid","age":22,"city":"delhi"},
    {"name":"Rahul Prajapat","age":24,"city":"jaipur"},
    {"name":"Sanjeev Baldia","age":23,"city":"delhi"},
    {"name":"narendar Sharm","age":22,"city":"alwar"}
    ];
router.get('/', function(req, res, next) {
  res.send(data);    
});

router.post('/', function(req, res, next) {
  var obj={};
  obj.name=req.body.name;
  obj.age=req.body.age;
  obj.city=req.body.city;
  data.push(obj);    
  res.send(data); 
});

module.exports = router;