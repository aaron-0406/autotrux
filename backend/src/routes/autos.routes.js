const express = require("express");
const router = express.Router();
const controller_auto = require("../controllers/autos.controllers");

router.get("/", controller_auto.getAutos);
router.get("/all", controller_auto.getAll);
router.get("/count", controller_auto.getCount);
router.get("/:id", controller_auto.getAutoByCodigo);
router.post("/", controller_auto.createAuto);
router.put("/:id", controller_auto.updateAuto);
router.delete("/:id", controller_auto.deleteAuto);

module.exports = router;
