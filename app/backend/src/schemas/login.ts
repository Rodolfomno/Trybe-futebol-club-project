import Joi = require('joi');

const emptyField = 'All fields must be filled';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Incorrect email or password',
    'any.required': emptyField,
    'string.empty': emptyField,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Incorrect email or password',
    'any.required': emptyField,
    'string.empty': emptyField,
  }),
});

export default loginSchema;
