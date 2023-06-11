require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
const connectDB = require("./config/db");

const mongo_uri = `mongodb+srv://shahid:arthur#540913@cluster0.ggcnvuy.mongodb.net/film-api`;

connectDB();
const port = process.env.PORT || 3000;
console.log({ port });
// Routes
app.use("/api/horror", require("./routes/horror"));
app.listen(port);

