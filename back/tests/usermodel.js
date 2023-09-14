const User = require('../models/user'); // Replace this with the path to your User model file

async function testPasswordHashingAndValidation() {
  // Create a new user
  const user = new User({
    username: 'testuser',
    email: 'testuser@test.com'
  });

  // Set password for the user
  user.setPassword('testpassword');

  // Validate the password
  if (user.validPassword('testpassword')) {
    console.log('Password is valid.');
  } else {
    console.log('Password is invalid.');
  }

  // Validate a wrong password
  if (user.validPassword('wrongpassword')) {
    console.log('Password is valid.');
  } else {
    console.log('Password is invalid.');
  }
}

testPasswordHashingAndValidation();
