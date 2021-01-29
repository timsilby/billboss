const router = require("express").Router();
const billRoutes = require("./bills")
const billsetRoutes = require("./billsets");

// Bill routes
router.use("/bills", billRoutes);
router.use("/billsets", billsetRoutes)

module.exports = router;
