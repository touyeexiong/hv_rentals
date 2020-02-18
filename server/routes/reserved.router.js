const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/reserved', (req, res) => {
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

router.delete(`/delete/:id`, (req, res) => {
    console.log('this is id were deleting', req.params.id);
    let queryText = `
    DELETE FROM "reservation"
    WHERE id=$1;
    `
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500);

        })
})

router.put('/update/:id', (req, res) => {
    console.log('update data is', req.body);
    console.log('user', req.user);
    
    const pick_up_date = req.body.startDate;
    const drop_off_date = req.body.returnDate;
    const total_price = req.body.updated_price;
    const user_id = req.user.id;
    const id = req.body.reservation_id

    let queryText = `
    UPDATE "reservation" 
    SET "pick_up_date" = $1, 
    "drop_off_date" = $2, 
    "user_id"= $3,
    "total_price" = $4
    WHERE "id" = $5;
    `;
    pool.query(queryText, [pick_up_date, drop_off_date, user_id, total_price, id])
    .then ((result) => {
        res.sendStatus(200);
    })
    .catch ((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
