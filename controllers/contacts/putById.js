const Contact = require("../../models/contact");
const createError = require("../../helpers/createError");
const { contactSchema } = require("../../models/schema");

const putById = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) throw createError(400, error.message);
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!req.body.name || !req.body.email || !req.body.phone)
      return res.status(400).send({ message: "missing required fiels" });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = putById;
