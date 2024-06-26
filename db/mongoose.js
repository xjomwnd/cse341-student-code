const mongoose = require('mongoose');

// Database connection URI
const DB_URI = 'mongodb+srv://mwishodb:7Mwathani77!@cluster0.r2xw8xx.mongodb.net/'; 

// Connect to MongoDB
mongoose.connect(DB_URI);

// Get the default connection
const db = mongoose.connection;

// Event listeners for Mongoose connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Gracefully close MongoDB connection when Node.js process terminates
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err.message);
    process.exit(1);
  }
});

module.exports = db;