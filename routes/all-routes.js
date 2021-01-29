const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/api-routes");

// API Routes
router.use("/api", apiRoutes);

// Send the react app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
