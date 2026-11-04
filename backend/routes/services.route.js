const express = require("express");
const {
  getServices,
  addService,
  removeService,
} = require("../controllers/servicesController");
const router = express.Router();

router.get("/", getServices);
router.post("/", addService);
router.delete("/:id", removeService);

module.exports = router;
