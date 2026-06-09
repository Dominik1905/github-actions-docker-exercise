const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

module.exports = app;