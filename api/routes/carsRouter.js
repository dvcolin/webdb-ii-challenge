const express = require('express');
const db = require('../../data/db-config.js');

const router = express.Router();


router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json(err);
        console.log(err)
    })
})




module.exports = router;