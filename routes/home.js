const express = require("express");
const route = express.Router();

const path = require("path");
const rootDir = require("../util/path");
const router = require("./funny-name");

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;