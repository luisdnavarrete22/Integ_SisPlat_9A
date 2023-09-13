require('dotenv').config({ path: './env/.env' });
const express = require("express");
const dbConnect = require("./database/mongodb");
const cors = require("cors");
const router = require("./routes/route_hab");

const App = express();

dbConnect(App);

App.use(cors({ origin: true }));

App.use(express.json());

App.use("/app/v1/hotel", router);