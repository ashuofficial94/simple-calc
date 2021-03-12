import express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", { docTitle: "Simple Calculator" });
});

export {router};
