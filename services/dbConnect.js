const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_CONNECT)
      .then(() => console.log("connected to database ..."))
      .catch((err) => console.log("Error occured: ", err));
  } catch (err) {
    console.log("failed to connect to db");
    console.log(err);
  }
};

module.exports = connectDB;
