const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// might be missing a line here

// POST to database
router.post('/', (req, res)=>{
    console.log('in router POST:', req.body);
    const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(queryString, values).then((result)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;