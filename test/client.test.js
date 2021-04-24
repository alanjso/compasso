const express = require('../src/server');
let chai = require('chai');
let request = require('supertest')(express);
let assert = chai.assert;
let Client = require('../src/app/client/client-model');
let City = require('../src/app/city/city-model');

const SERVICE = '/client';
describe('########## CLIENT ##########\n', function () {

    before(async () => {
        await Client.deleteMany({});
    });

    it('Adiciona cliente de maneira correta e espera status 202', async () => {
        const cities = await City.find({ 'name': 'Fortaleza' });
        await request.post(`${SERVICE}`)
            .send({
                'name': 'Alan Jefferson Silva de Oliveira',
                'sex': 'Homem',
                'birthday': new Date('1994-12-15T00:00:00'),
                'age': 26,
                'city': cities.length > 0 ? cities[0] : { name: 'Outra Cidade' }
            })
            .expect(function (res) {
                assert.equal(res.statusCode, '202');
            });
    });

    it('Lista clientes. Espera receber um array e status 200', async () => {
        await request.get(`${SERVICE}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
                assert.isArray(res.body);
            });

    });

    it('Get por id de um cliente que existe e recebe status code 200', async () => {

        const cities = await City.find({ 'name': 'Porto Alegre' });
        let client = {
            'name': 'Axley Rodrigues de Lima',
            'sex': 'Mulher',
            'birthday': new Date('2000-01-01T00:00:00'),
            'age': 26,
            'city': cities.length > 0 ? cities[0] : { name: 'Outra Cidade' }
        }

        client = await Client.create(client);

        await request.get(`${SERVICE}/${client._id}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Deleta um cliente que existe e recebe status code 200', async () => {

        const cities = await City.find({ 'name': 'Porto Alegre' });
        let client = {
            'name': 'Axley Rodrigues de Lima',
            'sex': 'Mulher',
            'birthday': new Date('2000-01-01T00:00:00'),
            'age': 26,
            'city': cities.length > 0 ? cities[0] : { name: 'Outra Cidade' }
        }

        client = await Client.create(client);

        await request.delete(`${SERVICE}/${client._id}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Edita um cliente que existe e recebe status code 200', async () => {
        const cities = await City.find({ 'name': 'Passo Fundo' });

        let client = {
            'name': 'uol',
            'city': { name: 'Sem cidade' }
        }

        client = await Client.create(client);

        await request.put(`${SERVICE}/${client._id}`)
            .send({
                'name': 'Compasso',
                'sex': 'Outros',
                'birthday': new Date('1995-01-01T00:00:00'),
                'age': 25,
                'city': cities.length > 0 ? cities[0] : { name: 'Outra Cidade' }
            })
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Get filtrando por nome, sexo e cidade do cliente. Recebe array com os resultados e status code 200', async () => {
        let filter = '26'
        await request.get(`${SERVICE}/filter/all/${filter}`)
            .expect(function (res) {
                assert.isArray(res.body);
                assert.equal(res.statusCode, '200');
            });
    });

    it('Get filtrando por nome do cliente. Recebe array com os resultados e status code 200', async () => {
        let filter = '26'
        await request.get(`${SERVICE}/filter/name/${filter}`)
            .expect(function (res) {
                assert.isArray(res.body);
                assert.equal(res.statusCode, '200');
            });
    });

    it('Edita um o nome de cliente que existe e recebe status code 200', async () => {

        client = await Client.find({ name: 'Compasso' });

        await request.put(`${SERVICE}/${client[0]._id}`)
            .send({
                'name': 'Compasso UOL',
            })
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

});