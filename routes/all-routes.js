const path = require("path");
const verifyToken = require("../utils/verifyToken");
const router = require("express").Router();
const apiRoutes = require("./api/api-routes");

// API Routes
router.use("/api", apiRoutes);

// Send the react app if not requesting an api route.
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
