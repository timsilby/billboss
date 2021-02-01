const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");

// API Routes
router.use(apiRoutes);

// Send the react app if not requesting an api route.
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
