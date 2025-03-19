const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../dbConfig");

// Get user details by ID
router.get("/users/:id", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("user_id", sql.Int, req.params.id)
      .query("SELECT user_id, username, email, profile_picture FROM Users WHERE user_id = @user_id");

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
