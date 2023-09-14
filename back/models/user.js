// Import necessary dependencies
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

// Define a schema for the User model with all required fields
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
  },
  image: String,
  hash: String, // For hashed password
  salt: String, // For salt used in hashing password
  role: String,
}, { timestamps: true });

// Define a method to set password for the user
// Here we are generating a random salt and using it to hash the password
UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

// Define a method to validate the user password
// We re-generate the hash with the provided password and the stored salt, and compare it with the stored hash
UserSchema.methods.validatePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

// Define a method to generate a JSON Web Token (JWT) for the user
// The token includes user's id, username, and expiration date. It's signed with a secret key
UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
    role : this.role, // This role is used to ensure data coming from frontend is secure
  }, 'SECRET');
};

// Define a method to return user data suitable for authentication purposes
UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    token: this.generateJWT(),
    image: this.image,
    role : this.role, // Role is used in frontend for faster processing
  };
};

// Add a plugin to the UserSchema to ensure username and email uniqueness
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

// Create the User model with the defined schema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;