const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DeliverySchema = new Schema(
  {
    weight: { type: Number, required: true },
    distance: { type: Number, required: true },
    deliveryType: {
      type: String,
      enum: ["standard", "express", "priority"],
      trim: true,
      default: "standard",
      required: true,
    },
    totalFee: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const DeliveryModel = model("DeliveryModel", DeliverySchema);

module.exports = DeliveryModel;
