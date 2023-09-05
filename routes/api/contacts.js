const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { validateId } = require("../../middlewares");

const schema = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:id", validateId, ctrl.getById);

router.post("/", validateBody(schema.addSchema), ctrl.addNewContact);

router.delete("/:id", ctrl.deleteContact);

router.put("/:id", validateBody(schema.addSchema), ctrl.updateContactById);

router.patch(
  "/:id/favorite",
  validateId,
  validateBody(schema.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
