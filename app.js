require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const connectDB = require("./config/db");

const mongo_uri = `mongodb+srv://shahid:arthur#540913@cluster0.ggcnvuy.mongodb.net/film-api`;

connectDB();
const port = process.env.PORT || 3000;
console.log({ port });
// Routes
app.use("/api/horror", require("./routes/horror"));
app.listen(port);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
