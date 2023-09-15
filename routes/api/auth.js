const express = require("express");

const ctrl = require("../../controllers/auth");

const { authenticate, validateBody } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

const signupValidateMiddleware = validateBody(schemas.userSignupSchema);
const signinValidateMiddleware = validateBody(schemas.userSigninSchema);

router.post("/register", signupValidateMiddleware, ctrl.register);

router.post("/login", signinValidateMiddleware, ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

module.exports = router;
