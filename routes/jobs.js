const express = require("express");
const router = express.Router();
// const jobs = require("../controllers/jobs");

//Yian Chen
router.get("/", (req, res) => {
  res.redirect("/jobs.html");
});

module.exports = router;
