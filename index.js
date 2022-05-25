const express = require("express");
const productsRoutes = require("./routes/products");

const PORT = 3002;

const app = express();
app.use("/api/products", productsRoutes);

app.listen(PORT);
