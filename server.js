const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const projectRoutes = require("./routes/projects");
const authRoutes = require("./routes/auth");

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Use routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log( `Server running on port ${PORT} `);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });