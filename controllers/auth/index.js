const currentUser = require("./current");
const loginUser = require("./login");
const signupUser = require("./signup");
const logoutUser = require("./logout");
const uploadAvatar = require("./uploadAvatar");
const verifyEmail = require("./verifyEmail");
const verificationToken = require("./verificationToken");
const updateSubUser = require("./updateSubUsers");

module.exports = {
  currentUser,
  loginUser,
  signupUser,
  logoutUser,
  uploadAvatar,
  verifyEmail,
  verificationToken,
  updateSubUser,
};
