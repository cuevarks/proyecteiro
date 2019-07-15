const express = require("express");
const chatDB = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let results = await chatDB.all();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
