// Router for user-related requests

// Import necessary dependencies
const express = require('express');
const usersController = require('../controller/userController');

// Create a new router
const router = express.Router();

// Define routes for user-related requests
// HTTP POST requests to '/create' will be handled by the create method of the usersController
router.post('/create', usersController.create);
// HTTP POST requests to '/login' will be handled by the login method of the usersController
router.post('/login', usersController.login);

// Export the configured router for use in the main router file
module.exports = router;