const router = require("express").Router();
const billRoutes = require("./bills");

// Bill routes
router.use("/bills", billRoutes);

module.exports = router;
