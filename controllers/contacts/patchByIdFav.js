const Contact = require("../../models/contact");
const createError = require("../../helpers/createError");
const { favoriteSchema } = require("../../models/schema");

const patchByIdFav = async (req, res, next) => {
  try {
    const { error } = favoriteSchema.validate(req.body);
    if (error) throw createError(400, error.message);
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) throw createError(404);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = patchByIdFav;
