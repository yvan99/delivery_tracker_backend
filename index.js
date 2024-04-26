const connectDB = require("./src/api/config/db");
const bodyParser = require("body-parser");
const express = require("express");

const locationRoutes = require("./src/api/routes/locationRoutes");
const routeRoutes = require("./src/api/routes/routeRoutes");
const vehicleRoutes = require("./src/api/routes/vehicleRoutes");
const deliveryRoutes = require("./src/api/routes/deliveryRoutes");

const app = express();
connectDB();

app.use(express.json())
// ROUTES
app.use("/api/locations", locationRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/deliveries", deliveryRoutes);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
