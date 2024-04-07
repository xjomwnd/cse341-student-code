// validatorjs.js
const Validator = require('validatorjs');

// Example usage
const data = {
  email: 'example@example.com',
  password: 'password123',
};

const rules = {
  email: 'required|email',
  password: 'required|min:8',
};

const validation = new Validator(data, rules);

if (validation.passes()) {
  console.log('Validation passed');
} else {
  console.log('Validation failed');
  console.log(validation.errors.all());
}

  