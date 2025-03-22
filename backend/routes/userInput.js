const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../dbConfig");

// input user information
router.post("/users", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
    const user_query = 'SELECT COUNT(*) FROM Users';
    // if needed replace req.param with req.body (.json)
    let user_id = connection.query(user_query) + 1;
    let created_at = new Date();
    const new_users = {
        "user_id" : user_id,
        "username" : req.params.username,
        "email" : req.params.email,
        "password_hash" : req.params.password_hash,
        "profile_picture" : req.params.profile_picture,
        "creater_at" : created_at
    };
    const insert_query = 'INSERT INTO Users SET ?';
    connection.query(insert_query, new_users);
    connection.end();
    
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;