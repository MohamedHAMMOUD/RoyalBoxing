// Import User model
const User = require('../models/user');

// The 'create' function is an async function that handles user creation requests
async function create(req, res) {
  // Destructure the request body to get user information 
  const { username, password, email, role } = req.body
  console.log(`Creating ${role} user with username: ${username}`)

  // Try-Catch block to handle potential errors
  try {
    // Create a new user object using the data received in the request
    const userData = { username, password, email, role }
    const newUser = new User(userData);
    // Set password for the new user
    newUser.setPassword(password);
    // Save the new user to the database asynchronously
    await newUser.save();
    // If user is successfully saved, return user data as a JSON response
    res.json(newUser.toAuthJSON());
  }
  catch (error) {
    // Log any errors and send a 500 (Server Error) response to the client
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Failed to create user', details: error.message });
  }
}

// The 'login' function is an async function that handles user login requests
async function login(req, res) {
  // Destructure the request body to get user credentials
  const { username, password } = req.body;
  console.log(`Attempting log in for user : ${username}`)

  // Try-Catch block to handle potential errors
  try {
    // Fetch user from the database using the username provided
    const user = await User.findOne({ username });
    // If no user is found or the password is invalid, return a 400 (Bad Request) response with an error message
    if (!user || !(await user.validatePassword(password))) {
      res.status(400).json({ error: 'Failed to log in', details: 'Invalid username or password' });
      console.error('Error logging in: Invalid username or password');

    } else {
      // If login credentials are valid, return user data as a JSON response
      console.log('User logged in successfully')
      res.send(user.toAuthJSON());
    }
  }
  catch (error) {
    // Log any errors and send a 500 (Server Error) response to the client
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Failed to log in', details: error.message });
  }
}

// Export the controller functions
module.exports = {
  create,
  login
}