const { Router } = require('express');
const routes = new Router();

routes.get('/health', (req, res) => {
    res.status(200).json({ compassoUOL: 'Compasso UOL => Server UP' });
});

require('./app/crud/crud-route')(routes);
require('./app/city/city-route')(routes);

module.exports = routes;