const clientService = require('./client-service');

module.exports = routes => {

    const SERVICE = '/client'

    routes.get(`${SERVICE}`, clientService.list);

    routes.post(`${SERVICE}`, clientService.create);

    routes.put(`${SERVICE}/:id`, clientService.edit);

    routes.delete(`${SERVICE}/:id`, clientService.delete);

    routes.get(`${SERVICE}/:id`, clientService.getById);

    routes.get(`${SERVICE}/filter/all/:filter`, clientService.searchAll);

    routes.get(`${SERVICE}/filter/all/:filter`, clientService.searchAll);

    routes.get(`${SERVICE}/filter/name/:filter`, clientService.searchName);

    routes.put(`${SERVICE}/change/name/:id`, clientService.editName);
}