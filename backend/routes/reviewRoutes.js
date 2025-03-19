const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../dbConfig");

// Get all reviews for an anime
router.get("/reviews/:animeId", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("AnimeID", sql.Int, req.params.animeId)
      .query(`
        SELECT r.review_id, r.user_id, u.username, r.AnimeID, a.Title AS AnimeTitle, r.rating, r.review_text, r.created_at
        FROM ReviewsTable r
        JOIN Users u ON r.user_id = u.user_id
        JOIN AnimeTable a ON r.AnimeID = a.AnimeID
        WHERE r.AnimeID = @AnimeID
      `);

    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
