// validator.js
const validator = {
    // Function to validate email format
    validateEmail: function(email) {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    
    // Function to validate password length
    validatePassword: function(password) {
      // Password length should be at least 8 characters
      return password.length >= 8;
    },
  
    // Add more validation functions as needed...
  };
  
  // Export the validator module
  module.exports = validator;
  