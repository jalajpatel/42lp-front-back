const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
connectDB();


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

app.use("/api/user", require("./routes/auth.routes"));



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
