var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var userSchema = require(path.join(__dirname, "../", 'db_schemas', 'userSchema.js'));
var userModel = mongoose.model('users', userSchema);





/* GET home page. */
router.post('/', function(req, res, next) {
    userModel.findOne({username: req.body.username},function(err, result){
      if(result){
        res.json({message: "user exists", type: "error"});
        return
      }
      else{
        console.log(req.body);
        var newUser = new userModel(req.body);
        newUser.save(function(err, result){
          console.log(err, result);
          req.login(result, function(err){
            res.json({
              message: "user " + result.username + " created.",
              type: "success"
            });
          });
        });
      }
    });
});

module.exports = router;
