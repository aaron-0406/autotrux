const express = require("express");
const router = express.Router();
const controller = require("../controllers/contacto.controllers");

router.get("/", (req, res) => {
    res.send("CONTACTO");
});
router.post("/", controller.sendMessage);

module.exports = router;