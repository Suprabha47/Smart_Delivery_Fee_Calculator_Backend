const Delivery = require("../models/deliveryDataModel");
const total = require("../config/calculateRates");

exports.calculateFee = async (req, res) => {
  try {
    const { weight, distance, deliveryType } = req.body;
    if (!weight || !distance || !deliveryType)
      res.status(400).json({ message: "missing input values" });

    let weightVal = parseFloat(weight);
    let distanceVal = parseFloat(distance);

    const totalFee = Number(total(weightVal, distanceVal, deliveryType));

    const delivery = await Delivery.create({
      weight,
      distance,
      deliveryType,
      totalFee: totalFee.toFixed(2),
    });
    res
      .status(201)
      .json({ message: "delivery created", totalFee: delivery.totalFee });
  } catch (err) {
    console.log("Request failed: ", err);
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

exports.history = async (req, res) => {
  try {
    const history = await Delivery.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ data: history });
  } catch (err) {
    console.log("Request failed: ", err);
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};
