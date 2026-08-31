const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
  res.json({
    message: "Hello from AKS Demo App!",
    environment: APP_ENV,
    hostname: require("os").hostname(),
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

app.get("/ready", (req, res) => {
  res.status(200).json({
    status: "ready"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
  console.log(`Environment: ${APP_ENV}`);
});