const express = require("express");
const router = express.Router();
const indexApi = require("./index");
const adminApi = require("./admin");
const userApi = require("./user");

// For no users
router.use("/", indexApi);
// For Admin users
router.use("/admin", adminApi);
// For General users
router.use("/user", userApi);

module.exports = router;
