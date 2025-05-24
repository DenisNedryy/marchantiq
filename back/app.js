require("dotenv").config();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const userRoute = require("./routes/users_routes");
const itemRoute = require("./routes/items_routes");
const newRoute = require("./routes/news_routes");
const path = require("path");


app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: `http://localhost:3000`, 
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,  
}));

app.use("/api/auth", userRoute);
app.use("/api/items", itemRoute);
app.use("/api/news", newRoute);
app.use("/api/images/items", express.static(path.join(__dirname, "uploads/pictures/items")));
module.exports = app;