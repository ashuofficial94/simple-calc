"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var router = express.Router();
exports.router = router;
router.get("/", function (req, res) {
    res.render("home", { docTitle: "Simple Calculator" });
});
