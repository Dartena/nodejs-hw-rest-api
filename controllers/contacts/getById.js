const Contact = require("../../models/contact");
const createError = require("../../helpers/createError");

const getById = async (req, res, next) => {
  const { _id: owner } = req.user;
  try {
    const { contactId } = req.params;
    const result = await Contact.findOne({ _id: contactId, owner });
    if (!result) throw createError(404);
    res.json(result).status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
