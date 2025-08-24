const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const urlRoutes = require("./routes/url.route");

const connectToDb = require("./db/db");
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const cors = require("cors");
app.use(cors());

app.use("/",urlRoutes);



app.listen(3000, () => {
    console.log("Server is running on port 3000")
});