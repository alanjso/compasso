const { Router } = require('express');
const routes = new Router();

routes.get('/health', (req, res) => {
    res.status(200).json({ compassoUOL: 'Compasso UOL => Server UP' });
});

require('./app/city/city-route')(routes);
require('./app/client/client-route')(routes);

module.exports = routes;