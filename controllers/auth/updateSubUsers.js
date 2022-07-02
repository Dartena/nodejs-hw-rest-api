const { createError } = require("../../helpers/createError");
const { subSchema } = require("../../models/schema");
const User = require("../../models/user");

const updateSubUser = async (req, res, next) => {
  try {
    const { error } = subSchema.validate(req.body);
    if (error) throw createError(400, error.message);
    const { subscription } = req.body;
    const { _id: id } = req.user;
    const user = User.findOneAndUpdate(
      { _id: id },
      { subscription },
      { new: true }
    );
    if (!user) throw createError(404, "User is not found");
    res.status(200).json({
      status: "success",
      code: 200,
      user: { email: user.email, subscription: user.subscription },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubUser;
