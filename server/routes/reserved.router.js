const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let queryText =
        `
    SELECT *
    FROM "reservation"
    WHERE "rv_id" = $1;
    `;
    pool.query(queryText, [id])
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

router.post('/reserved', (req, res) => {
    const pick_up_date = req.body.pick_up_date;
    const drop_off_date = req.body.drop_off_date;
    const rv_id = req.body.rv_id;
    const user_id = req.body.user_id;
    const total_price = req.body.price;

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

    const pick_up_date = req.body.pick_up_date;
    const drop_off_date = req.body.drop_off_date;
    const total_price = req.body.price;
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
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

module.exports = router;
