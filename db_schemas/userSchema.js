var mongoose=require('mongoose');

var Schema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstname: String,
  lastname: String,
  roles: [String]
});
module.exports = Schema;
