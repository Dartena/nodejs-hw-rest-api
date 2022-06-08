const Contact = require("../../models/contact");
const createError = require("../../helpers/createError");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findOne({ _id: contactId });
    if (!result) throw createError(404);
    res.json(result).status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
