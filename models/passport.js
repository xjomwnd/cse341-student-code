const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Import your User model

// Local Strategy for username/password authentication
passport.use(new LocalStrategy({
  usernameField: 'email', // Specify the email field as the username
  passwordField: 'password' // Specify the password field
}, async (email, password, done) => {
  try {
    // Find user by email
    const user = await User.findOne({ email });

    // If user not found or password incorrect
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: 'Incorrect email or password' });
    }

    // Authentication successful, return user
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// JWT Strategy for token-based authentication
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET // Use your JWT secret from environment variables
}, async (payload, done) => {
  try {
    // Find user by ID from JWT payload
    const user = await User.findById(payload.sub);

    // If user not found
    if (!user) {
      return done(null, false);
    }

    // Authentication successful, return user
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

module.exports = passport;
