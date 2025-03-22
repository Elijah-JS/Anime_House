const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../dbConfig");

// input user information
router.post("/reviews", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
    .input("user_id", sql.Int, req.params.id);
    const user_query = 'SELECT user_id FROM Users WHERE user_id = @user_id';    let user_id = connection.query()
    let current_user_id = connection.query(user_query);
    const review_query = 'SELECT COUNT(*) FROM Reviews';
    let new_review_id = connection.query(review_query) + 1;
    // if needed replace req.param with req.body (.json)
    let ReviewDate = new Date();
    const new_reviews = {
        "ReviewID" : new_review_id,
        "UserID" : current_user_id,
        "AnimeID" : req.params.AnimeID,
        "ReviewText" : req.params.password_hash,
        "Rating" : req.params.profile_picture,
        "ReviewDate" : ReviewDate
    };
    const insert_query = 'INSERT INTO Reviews SET ?';
    connection.query(insert_query, new_reviews);
    connection.end();
    
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;