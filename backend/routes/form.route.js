const express = require("express");
const router = express.Router();
const validateForm = require("../middlewares/validateForm.middleware");
const {
  createForm,
  getForms,
  removeForm,
} = require("../controllers/formController");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

router.post("/add", validateForm, createForm);
router.get("/",  getForms);
router.delete("/remove/:id", removeForm);

module.exports = router;