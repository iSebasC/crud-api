//4PASO
const express = require('express');
const connection = require('../connection');
//Guardar (const)
const router = express.Router()

router.get('/users', (req,res) => {
    const query = 'select * from user'
    connection.query(query, (err, results) => {
        if (err) throw error;
        res.json(results);
      })
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params
    const query = `select u.name, u.lastname from user u where u.id = ${id}`
    connection.query(query, (err, results) => {
        if (err) throw error
        res.json(results);
    })
});

module.exports = router;