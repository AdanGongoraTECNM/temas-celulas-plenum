const express = require('express');
const path = require('path');

const routerPrincipal = express.Router();

routerPrincipal.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'));
});

module.exports = routerPrincipal;
