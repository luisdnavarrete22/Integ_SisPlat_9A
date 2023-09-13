const express = require("express");
const router = express.Router();
const Hab_controller = require("../controllers/Cont_habitacion");

router.post("/", Hab_controller.createHab);

router.get("/", Hab_controller.getHab);

module.exports = router;