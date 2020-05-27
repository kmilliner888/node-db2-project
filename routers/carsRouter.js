const express = require('express');

const knex = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await knex('cars');
        res.json(cars);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "error retrieving cars"});
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
    const car = await knex.select('*').from('cars').where({id}).first();
        if(car) {
            res.status(200).json(car);
        }  else {
            res.status(400).json({message: "car not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "wah wah, error, sorry"});
    }    
});

router.post('/', async (req, res) => {
    const carInfo = req.body;

    try {
        const car = await knex.insert(carInfo).into('cars');
        res.status(201).json(car);
    }  catch (error) {
        res.status(500).json({message: "whoopsie, something went wrong here"});
    }
});

module.exports = router;