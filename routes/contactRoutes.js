const express = require("express");
const {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.use(validateToken);

router.get("/", getContact);

router.post("/", createContact);

router.get("/:id", getContactById);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
