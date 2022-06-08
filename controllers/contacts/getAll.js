const Contact = require("../../models/contact");

const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find();
    res.json({ result, message: "List users" });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
