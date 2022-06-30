const express = require("express");
const controllers = require("../../controllers/auth");
const { auth, upload } = require("../../middlewares");

const router = express.Router();

router.post("/signup", controllers.signupUser);

router.post("/login", controllers.loginUser);

router.get("/logout", auth, controllers.logoutUser);

router.get("/current", auth, controllers.currentUser);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controllers.uploadAvatar
);

module.exports = router;
