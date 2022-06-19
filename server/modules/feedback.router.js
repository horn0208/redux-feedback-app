const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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

// GET to database
router.get('/', (req, res)=>{
    console.log('in router GET');
    const queryString = `SELECT * FROM feedback ORDER BY id DESC;`;
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
});

// DELETE to database
router.delete('/delete', (req, res)=>{
    console.log('in router DELETE:', req.query.id);
    const queryString = `DELETE FROM feedback WHERE id=$1;`
    const values =[req.query.id];
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        res.sendStatus(500);
    })
})

module.exports = router;