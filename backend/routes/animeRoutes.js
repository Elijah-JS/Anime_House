const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../dbConfig");

// Get all anime
router.get("/anime", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM AnimeTable");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get anime by ID
router.get("/anime/:id", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("AnimeID", sql.Int, req.params.id)
      .query("SELECT * FROM AnimeTable WHERE AnimeID = @AnimeID");

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
