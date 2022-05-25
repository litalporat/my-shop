const express = require("express");
const cors = require('cors')
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const categoriesRoutes = require("./routes/categoriesRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoriesRoutes);
app.get('/.well-known/acme-challenge/:id', function(req, res, next) {
    res.send(req.params.id+'.'+YOUR_PROVIDED_CERTBOT_ID);
});

module.exports = app;