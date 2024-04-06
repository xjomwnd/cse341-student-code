/* eslint-disable no-undef */
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // Find or create user logic goes here
    return done(null, profile);
  }
));
