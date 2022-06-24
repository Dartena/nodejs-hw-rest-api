const express = require("express");
const controllers = require("../../controllers/contacts");
const { auth } = require("../../middlewares");

const router = express.Router();

router.get("/", auth, controllers.getAll);

router.get("/:contactId", auth, controllers.getById);

router.post("/", auth, controllers.postContact);

router.delete("/:contactId", auth, controllers.removeById);

router.put("/:contactId", auth, controllers.putById);

router.patch("/:contactId/favorite", auth, controllers.patchByIdFav);

module.exports = router;
