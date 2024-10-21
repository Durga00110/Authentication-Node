const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.USER_DB_URI);
        console.log("MongoDB connected Successfully 🍀🍁");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
