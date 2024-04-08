/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db/mongoose'); // Import mongoose.js for database connection
const models = require('./models/express-session');

const app = require('./app');
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media Aggregator API');
});

// Example route for handling social media data
app.post('/socialmedia', async (req, res) => {
  try {
    // Here you can handle incoming social media data and save it to the database using Mongoose
    res.status(200).json({ message: 'Social media data received and saved successfully' });
  } catch (error) {
    console.error('Error saving social media data:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Route to handle 'like' action
app.post('/like', (req, res) => {
    // Logic to handle 'like' action (e.g., increment like count in the database)
    // For demonstration, we'll just send a success response
    res.send('Post liked successfully');
});

// Route to handle 'comment' action
app.post('/comment', (req, res) => {
    // Logic to handle 'comment' action
    res.send('Comment added successfully');
});

// Route to handle 'share' action
app.post('/share', (req, res) => {
    // Logic to handle 'share' action
    res.send('Post shared successfully');
});

// Route to handle 'bookmark' action
app.post('/bookmark', (req, res) => {
    // Logic to handle 'bookmark' action
    res.send('Post bookmarked successfully');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});