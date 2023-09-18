const express = require("express");

const ctrl = require("../../controllers/auth");

const { authenticate, validateBody, upload } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

const signupValidateMiddleware = validateBody(schemas.userSignupSchema);
const signinValidateMiddleware = validateBody(schemas.userSigninSchema);
const emailValidateMiddleware = validateBody(schemas.userEmailSchema);

router.post("/register", signupValidateMiddleware, ctrl.register);

router.get("/verify/:verificationCode", ctrl.verify);

router.post("/verify", emailValidateMiddleware, ctrl.resendVerify);

router.post("/login", signinValidateMiddleware, ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
