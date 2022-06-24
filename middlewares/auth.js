const { createError } = require("../helpers/createError");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") throw createError(401, "Not authorized");
    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);
      if (!user || !user.token) throw createError(401, "Mot authorized");
      req.user = user;
      next();
    } catch (error) {
      throw createError(401, "Not authorized");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
