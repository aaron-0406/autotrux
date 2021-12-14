const express = require("express");
const router = express.Router();
const controller_reserva = require("../controllers/reserva.controllers");

router.get("/", controller_reserva.getReservas);
router.get("/count", controller_reserva.getCount);
router.get("/ar", controller_reserva.arReserva);
router.post("/", controller_reserva.sendReserva);
router.delete("/:id", controller_reserva.deleteReserva);

module.exports = router;
