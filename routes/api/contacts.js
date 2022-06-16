const express = require("express");
const controllers = require("../../controllers/contacts");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:contactId", controllers.getById);

router.post("/", controllers.postContact);

router.delete("/:contactId", controllers.removeById);

router.put("/:contactId", controllers.putById);

router.patch("/:contactId/favorite", controllers.patchByIdFav);

module.exports = router;
