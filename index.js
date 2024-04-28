const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const connectDB = require("./src/api/config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

const locationRoutes = require("./src/api/routes/locationRoutes");
const routeRoutes = require("./src/api/routes/routeRoutes");
const vehicleRoutes = require("./src/api/routes/vehicleRoutes");
const deliveryRoutes = require("./src/api/routes/deliveryRoutes");

const updateVehicleLocations = require("./src/api/config/locationsocket");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/locations", locationRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/deliveries", deliveryRoutes);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

setInterval(() => updateVehicleLocations(wss, WebSocket.OPEN), 3000);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
