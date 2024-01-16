const express = require("express");
const {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

router.get("/", getContact);

router.post("/", createContact);

router.get("/:id", getContactById);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
