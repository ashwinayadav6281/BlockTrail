const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("📥 Received safe-route request");

  res.json({ status: "ok", route: [[req.body.start.lat, req.body.start.lng], [req.body.end.lat, req.body.end.lng]] });
});

module.exports = router;

module.exports = router;
