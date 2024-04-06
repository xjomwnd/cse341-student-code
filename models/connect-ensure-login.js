const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

module.exports = function(req, res, next) {
    // Middleware to ensure user is logged in
    ensureLoggedIn('/login')(req, res, next);
};
