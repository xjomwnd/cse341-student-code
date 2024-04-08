const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

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
