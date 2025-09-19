const express = require("express");
const router = express.Router();
const { calculateFee, history } = require("../controllers/calcController");

router.post("/calculate-fee", calculateFee);

router.get("/history", history);

module.exports = router;
