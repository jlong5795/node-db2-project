const express = require('express');
const knex = require('knex');
const db = require('../../data/dbconfig.js');

const router = express.Router();

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'Error adding car to the database.'});
        });
});

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json({ error: 'Error retrieving cars.'});
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
        .where({id})
        .del()
        .then(response => {
            res.status(400).json(`${response} record has been deleted.`);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error deleting the car.'})
        });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
        .where({id})
        .update(req.body)
        .then(car => {
            res.status(202).json(car);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: 'There was an error updating the car.'})
        });
});
module.exports = router;