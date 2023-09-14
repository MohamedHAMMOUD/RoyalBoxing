// Router for discipline-related requests

// Import necessary dependencies
const express = require('express');
const disciplineController = require('../controller/disciplineController');

// Create a new router
const router = express.Router();

// Define the route for getting all disciplines
// HTTP GET requests to the root ('/') will be handled by the getAllDisciplines method of the disciplineController
router.get('/', disciplineController.getAll);

// Export the configured router for use in the main router file
module.exports = router;