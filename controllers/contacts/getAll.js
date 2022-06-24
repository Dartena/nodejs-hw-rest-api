const Contact = require("../../models/contact");

const getAll = async (req, res, next) => {
  const { _id } = req.user;
  const { page = 1, limit = 5, favorite } = req.query;
  const skip = (page - 1) * limit;
  try {
    const result = await Contact.find(
      { owner: _id, favorite: favorite },
      "-createdAt -updatedAt",
      { skip, limit: Number(limit) }
    );
    res.json({ result, message: "List users" });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
