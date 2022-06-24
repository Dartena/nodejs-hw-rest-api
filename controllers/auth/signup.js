const { createError } = require("../../helpers/createError");
const { regSchema } = require("../../models/schema");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const signupUser = async (req, res, next) => {
  try {
    const { error } = regSchema.register.validate(req.body);
    if (error) throw createError(400);
    const { email, password } = req.body;
    const result = await User.findOne({ email });
    if (result) throw createError(409, result.message);
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashPassword });
    res.status(201).json({ user: { email } });
  } catch (error) {
    next(error);
  }
};

module.exports = signupUser;
