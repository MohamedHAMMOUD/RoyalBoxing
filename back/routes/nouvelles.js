// Router for discipline-related requests

// Import necessary dependencies
const express = require('express');
const nouvelleController = require('../controller/nouvelleController');

// Create a new router
const router = express.Router();

// Define the route for getting all news
// HTTP GET requests to the root ('/') will be handled by the getAllNews method of the news controller
router.get('/', nouvelleController.getAll);

// Export the configured router for use in the main router file
module.exports = router;