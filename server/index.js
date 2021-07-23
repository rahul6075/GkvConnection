const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const multer = require("multer");
// const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");
// const router = express.Router();
// const path = require("path");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// InitMiddileWare


app.get("/", (req, res) => res.send("API Running"));
//Define Routes

app.listen(8800, () => {
  console.log("Backend server is running!");
});
