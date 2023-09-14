// Import necessary dependencies
const config = require('./const/config');
const express = require('express');
const router = require('./routes/index');
const db = require('./database/MongoDb');
const cors = require('cors');

// Initialize a new Express application
const app = express();

// Define the port for the server to listen on
// Use the PORT environment variable if it's available (e.g., in a production environment)
// Fall back to port 3001 otherwise (e.g., in a development environment)
const port = process.env.PORT || 3001;

// Use CORS middleware to enable Cross-Origin Resource Sharing
// This allows the server to respond to requests from different origins (i.e., different domains, protocols, or ports)
app.use(cors());

// Use Express's built-in middleware for parsing JSON bodies of incoming requests
// When this middleware finishes parsing the request body, it passes control to the next middleware in the stack
// In this case, the next middleware is the route handler (defined in the router module)
app.use(express.json());

// Use the routes defined in the router module
// This allows the application to respond appropriately to various HTTP requests
app.use(router);

// Connect to the database using the MongoDB connection module (db)
// Once connected, start the Express server and begin listening for HTTP requests
// If an error occurs during connection, log the error
db.connect(config.mongoDbUrl, config.dbName)
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });