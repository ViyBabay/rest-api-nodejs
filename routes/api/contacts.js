const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const {
  authenticate,
  upload,
  validateBody,
  validateId,
} = require("../../middlewares");

const schema = require("../../schemas/contacts");

router.use(authenticate);

router.get("/", ctrl.getAllContacts);

router.get("/:id", validateId, ctrl.getById);

router.post(
  "/",
  upload.single("avatar"),
  validateBody(schema.addSchema),
  ctrl.addNewContact
);

router.delete("/:id", ctrl.deleteContact);

router.put("/:id", validateBody(schema.addSchema), ctrl.updateContactById);

router.patch(
  "/:id/favorite",
  validateId,
  validateBody(schema.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
