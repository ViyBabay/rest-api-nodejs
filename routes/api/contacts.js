const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schema = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schema.addSchema), ctrl.addNewContact);

router.delete("/:id", ctrl.deleteContact);

router.put("/:id", validateBody(schema.addSchema), ctrl.updateContactById);

module.exports = router;
