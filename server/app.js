// App Configs
const express = require("express");
const cors = require('cors');
const compression = require('compression');
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const locationRoutes = require("./routes/locationRoutes");
const currencyRoutes = require("./routes/currencyRoutes");
const app = express();

// Middlewares
app.use(cors());
app.use(compression());
app.use(express.json());

// API Endpoints
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/currency", currencyRoutes);

module.exports = app;