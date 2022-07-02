const { createError } = require("../../helpers/createError");
const { regSchema } = require("../../models/schema");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const { SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");

const loginUser = async (req, res, next) => {
  try {
    const { error } = regSchema.login.validate(req.body);
    if (error) throw createError(400, error.message);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw createError(401, "Email or password is wrong");
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) throw createError(401, "Email or password is wrong");
    if (!user.verify) throw createError(401, "Email not verify");
    const payload = { id: user._id };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "5h" });
    await User.findByIdAndUpdate(user._id, { token });
    res.json({ token, user: { email } });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
