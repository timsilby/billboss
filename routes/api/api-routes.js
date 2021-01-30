const router = require("express").Router();
const billRoutes = require("./bills")
const billsetRoutes = require("./billsets");
const transactionRoutes = require("./transactions")
const userRoutes = require("./users");
const accountsRoutes = require("./accounts");

// Bill routes
router.use("/bills", billRoutes);
router.use("/billsets", billsetRoutes);
router.use("/transactions", transactionRoutes);
router.use("/users", userRoutes);
router.use("/accounts", accountsRoutes);

module.exports = router;
