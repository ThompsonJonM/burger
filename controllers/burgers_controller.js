// Dependencies
var express = require('express');
var burgers = require('../models/burger.js');

// Router
var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgers')
});

router.get('/burgers', function(req, res) {
    burgers.selectAll(function(data) {
        var burgerTable = {burgers: data};

        res.render('index', burgerTable);
    });
});

router.post('/burgers/new', function(req, res) {
    burgers.insertOne(['burger_name'], [req.body.burger_name], function(data) {
        res.redirect('/burgers')
    });
});

router.put('/burgers/update/:id', function(req, res) {
    var id = req.params.id;

    burgers.updateOne(id), function(data) {
        res.redirect('/burgers')
    };
});

module.exports = router;
