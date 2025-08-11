// import express from express;
// import dotenv from dotenv;
// import {connectDB} from config
// import cors from cors;

// dotenv.config()
// const app = express()
// app.use(cors());
// app.use(express.json());
// connectDB();


// app.use("/", require("./routes"));

// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config");
// const cors = require("cors");

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config.js";
import cors from "cors";
import router from "./src/route/routes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



