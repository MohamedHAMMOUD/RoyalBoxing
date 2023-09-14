// Main router file

// Import necessary dependencies
const express = require('express');
const userRouter = require('./users');
const disciplineRouter = require('./disciplines');
const instructorRouter = require('./instructors');
const nouvelleRouter = require('./nouvelles');



// Create a new router
const router = express.Router();

// Assign specific routers to handle requests for different paths
// Each router will handle requests for a specific entity type (e.g., users, disciplines)
router.use('/users', userRouter); // For user-related requests
router.use('/disciplines', disciplineRouter); // For discipline-related requests
router.use('/instructors', instructorRouter); // For instructor-related requests
router.use('/news', nouvelleRouter); // For news-related requests



// Export the configured router for use in the main server file
module.exports = router;