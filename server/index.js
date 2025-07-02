const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const safeRoute = require("./routes/SafeRoute");
app.use("/api/safe-route", safeRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
