const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Configure MongoDBStore
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/your-database-name',
    collection: 'sessions'
});

// Error handling
store.on('error', function(error) {
    console.error('MongoDB session store error:', error);
});

module.exports = store;
