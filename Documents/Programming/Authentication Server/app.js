const express = require("express");
const app = express();
const authRoutes = require('./Routes/authenticationRoutes');
const connectdb = require('./Database/db')
require("dotenv").config();
app.use(express.json());

// Connect to MongoDB
connectdb();

// Sample route
app.use("/auth",authRoutes)

// Start the server
app.listen(8080, () => {
    console.log("App is listening on port 8080 💻");
});
