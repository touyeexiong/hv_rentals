const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    // console.log(req.user.id);
    let id = req.user.id;
    let queryText = `
    SELECT "rvs".rv_name, "reservation".rv_id, "rvs".rv_description, "rvs".rv_image_path, "reservation".pick_up_date, "reservation".drop_off_date, "reservation".total_price, "reservation".id
    FROM "reservation"
    JOIN "user" ON "user".id = "reservation".user_id
    JOIN "rvs" ON "rvs".id = "reservation".rv_id
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

router.get('/:id', (req,res) => {
let id = req.params.id
let queryText = 
`

    SELECT "rvs".rv_name, "reservation".rv_id, "rvs".rv_description, "rvs".rv_image_path, "reservation".pick_up_date, "reservation".drop_off_date, "reservation".total_price, "reservation".id
    FROM "reservation"
    JOIN "user" ON "user".id = "reservation".user_id
    JOIN "rvs" ON "rvs".id = "reservation".rv_id
    WHERE "reservation".id =$1;
`;
pool.query(queryText, [id]) 
.then((result) => {
    console.log(...result.rows);
    res.send(...result.rows)
})
.catch((err) => {
    console.log(err);
    res.sendStatus(500);
    
})
})

module.exports = router;