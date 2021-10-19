const express = require("express");
const router = express.Router();
const controller_usuario = require("../controllers/usuario.controllers");

router.get("/whoami", controller_usuario.whoami);

module.exports = router;