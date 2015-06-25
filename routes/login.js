var express = require('express');
var router = express.Router();
var passport = require('passport');

/* authenticate to login. */
router.post('/', passport.authenticate('local') ,function(req, res, next) {
  res.json(req.user);
});

module.exports = router;
