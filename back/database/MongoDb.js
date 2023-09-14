const mongoose = require('mongoose');

// This class encapsulates the logic for connecting to our MongoDB database
class MongoDb {
  constructor() {
    // The URL of the MongoDB server
    this._url = null;
    // The name of the database we want to connect to
    this._dbname = null;
    // The mongoose database connection object
    this.db = null;
  }

  // Asynchronous method to connect to a MongoDB database
  async connect(databaseUrl, databaseName) {
    this._url = databaseUrl;
    this._dbname = databaseName;

    // Attempt to connect to the database using the mongoose connect method.
    // The method requires a connection string, which we construct by appending the database name to the URL
    // Additional options are passed to avoid deprecation warnings.
    mongoose.connect(`${this._url}${this._dbname}`, { useNewUrlParser: true, useUnifiedTopology: true });

    // Once connected, store the connection in the `db` property
    this.db = mongoose.connection;

    // Listen for the 'error' event on the connection. If it fires, log the error to the console.
    this.db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    // Listen for the 'open' event on the connection. This event signifies a successful connection.
    this.db.once('open', () => {
      console.log(`Successfully connected to MongoDB database at: ${this._url}`);
    });
  }
}

// Create a new instance of the MongoDb class, effectively creating a "singleton".
// This instance can be imported in other parts of the application to interact with the database.
const db = new MongoDb();

// Export the instance so it can be used elsewhere in the application.
module.exports = db;