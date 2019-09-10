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

router.post('/', validateCar, (req, res) => {
    const car = req.body;

    db('cars').insert(car)
    .then(car => {
        res.status(200).json(car[0]);
    })
    .catch(err => {
        res.status(500).json({ error: 'Car could not be added to database.' });
    })
})



function validateCar (req, res, next) {
    const { vin, make, model, mileage } = req.body;

    if (!vin || !make || !model || !mileage) {
        res.status(400).json({ message: 'Please provide all required fields.' });
    } else {
        next();
    }
}



module.exports = router;