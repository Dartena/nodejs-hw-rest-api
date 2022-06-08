const Contact = require("../../models/contact");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndRemove(contactId);
  if (!contact) return res.status(404).send({ message: "Not found" });
  res.json({ message: "Contact deleted", status: "success" });
};

module.exports = removeById;
