// Router for discipline-related requests

// Import necessary dependencies
const express = require('express');
const instructorController = require('../controller/instructorController');

// Create a new router
const router = express.Router();

// Define the route for getting all disciplines
// HTTP GET requests to the root ('/') will be handled by the getAllDisciplines method of the disciplineController
router.get('/', instructorController.getAll);

// Export the configured router for use in the main router file
module.exports = router;