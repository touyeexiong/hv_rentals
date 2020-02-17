const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    // console.log(req.user.id);
    let id = req.user.id;
    let queryText = `
    SELECT "reservation".pick_up_date, "reservation".drop_off_date, "reservation".total_price, "reservation".id
    FROM "reservation"
    JOIN "user" ON "user".id = "reservation".user_id
    WHERE "user".id = ${id};
    `;
    pool.query(queryText) 
    .then((result) => {
        res.send(result.rows)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;