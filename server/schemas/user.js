const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  user: String,
  password: String,
  isAdmin: Boolean
}, {collection: 'Users'})

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;

