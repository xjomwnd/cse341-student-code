const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();

// MongoDB connection URI
const mongoURI = 'mongodb+srv://mwishodb:7Mwathani77!@cluster0.r2xw8xx.mongodb.net/'; 

// Create a new MongoDBStore
const store = new MongoDBStore({
    uri: mongoURI,
    collection: 'sessions'
});

// Catch errors
store.on('error', function(error) {
    console.error('MongoDB session store error:', error);
});

// Configure express-session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    store: store
}));

// Other middleware and routes...

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});