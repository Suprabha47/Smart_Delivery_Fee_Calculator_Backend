const ratesByWeight = (val) => {
  let rate = 0;
  if (val > 0 && val <= 5) {
    rate = val * 10;
  } else if (val > 5 && val <= 20) {
    rate = val * 8;
  } else {
    rate = val * 5;
  }
  return rate;
};

const ratesByDistance = (val) => {
  let rate = 0;
  if (val > 0 && val <= 5) {
    rate = val * 5;
  } else if (val > 5 && val <= 20) {
    rate = val * 3;
  } else {
    rate = val * 2;
  }
  return rate;
};

const ratesByDeliveryType = (val) => {
  let rate = 0;
  if (val === "standard") {
    rate = 1;
  } else if (val === "express") {
    rate = 1.5;
  } else if (val === "priority") {
    rate = 2;
  }
  return rate;
};

const total = (weight, distance, type) => {
  if (weight < 0 || distance < 0) return "invalid values";
  const base = 50;
  const wgtRate = ratesByWeight(weight);
  const distRate = ratesByDistance(distance);
  const typeRate = ratesByDeliveryType(type);

  const totalFee = (base + wgtRate + distRate) * typeRate;

  return totalFee;
};

module.exports = total;
