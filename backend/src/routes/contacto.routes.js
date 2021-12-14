const express = require("express");
const router = express.Router();
const controller = require("../controllers/contacto.controllers");

router.get("/", controller.getAllMessage);
router.get("/count", controller.getCount);
router.post("/", controller.sendMessage);
router.delete("/:id", controller.deleteContacto);

module.exports = router;
