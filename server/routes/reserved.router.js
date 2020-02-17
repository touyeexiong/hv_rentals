const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/reserved', (req,res) => {
    const pick_up_date = req.body.pick_up_date;
    const drop_off_date = req.body.drop_off_date;
    const rv_id = req.body.rv_id;
    const user_id = req.body.user_id;
    const total_price = req.body.total_price;
console.log('this is the', pick_up_date);

    const queryText = 
    `INSERT INTO "reservation"
    ("pick_up_date", "drop_off_date", "rv_id", "user_id", "total_price")
    VALUES ($1, $2, $3, $4, $5);
    `;
    pool.query(queryText, [pick_up_date, drop_off_date, rv_id, user_id, total_price])
    .then((result) => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;