require('dotenv').config({ path: './env/.env' });
const express = require("express");
const mongodb = require("./database/mongodb");
const cors = require("cors");
const router = require("./routes/route_hab");

const App = express();

mongodb(App);

App.use(cors({ origin: true }));

App.use(express.json());

App.use("/app/v1/hotel", router);