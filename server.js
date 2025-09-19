const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./services/dbConnect");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/calcRoutes"));

function init() {
  connectDB();
  const PORT = process.env.PORT || 4005;
  app.listen(PORT, () => console.log(`server running at ${PORT}`));
}

init();
