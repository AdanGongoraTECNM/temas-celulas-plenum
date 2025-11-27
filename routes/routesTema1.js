const express = require('express');
const path = require('path');

const routesTema1 = express.Router();

routesTema1.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '1-1.html'));
});

routesTema1.get('/2', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '1-2.html'));
});

routesTema1.get('/3', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '1-3.html'));
});

routesTema1.get('/4', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '1-4.html'));
});

module.exports = routesTema1;
