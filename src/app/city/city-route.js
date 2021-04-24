const cityService = require('./city-service');

module.exports = routes => {

    const SERVICE = '/city'

    routes.get(`${SERVICE}`, cityService.list);

    routes.post(`${SERVICE}`, cityService.create);

    routes.put(`${SERVICE}/:id`, cityService.edit);

    routes.delete(`${SERVICE}/:id`, cityService.delete);

    routes.get(`${SERVICE}/:id`, cityService.getById);

    routes.get(`${SERVICE}/filter/:filter`, cityService.search);
}