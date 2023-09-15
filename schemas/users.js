const Joi = require("joi");

const { emailRegexp } = require("../constants/user-constants");

const userSignupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});

const userSigninSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});

module.exports = {
  userSignupSchema,
  userSigninSchema,
};
