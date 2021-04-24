const express = require('../src/server');
let chai = require('chai');
let request = require('supertest')(express);
let assert = chai.assert;
let City = require('../src/app/city/city-model');

const SERVICE = '/city';
describe('########## CITY ##########\n', function () {

    before(async () => {
        await City.deleteMany({});
    });

    it('Adiciona cidade de maneira correta e espera status 202', async () => {
        await request.post(`${SERVICE}`)
            .send({
                'name': 'Fortaleza',
                'state': 'Ceará'
            })
            .expect(function (res) {
                assert.equal(res.statusCode, '202');
            });
    });

    it('Lista cidade e espera status 200', async () => {
        await request.get(`${SERVICE}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });

    });

    it('Get por id de uma cidade que existe e recebe status code 200', async () => {

        let city = {
            'name': 'Passo Fundo',
            'state': 'Rio Grande do Sul'
        }

        city = await City.create(city);

        await request.get(`${SERVICE}/${city._id}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Deleta uma cidade que existe e recebe status code 200', async () => {

        let city = {
            'name': 'São Paulo',
            'state': 'São Paulo'
        }

        city = await City.create(city);

        await request.delete(`${SERVICE}/${city._id}`)
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Edita uma cidade que existe e recebe status code 200', async () => {

        let city = {
            'name': 'porto Alegre',
            'state': 'RS'
        }

        city = await City.create(city);

        await request.put(`${SERVICE}/${city._id}`)
            .send({
                'name': 'Porto Alegre',
                'state': 'Rio Grande do Sul'
            })
            .expect(function (res) {
                assert.equal(res.statusCode, '200');
            });
    });

    it('Get filtrando por nome de uma cidade ou estado e recebe array com os resultados e status code 200', async () => {
        let filter = 'inserir busca aqui'
        await request.get(`${SERVICE}/filter/all/${filter}`)
            .expect(function (res) {
                assert.isArray(res.body);
                assert.equal(res.statusCode, '200');
            });
    });

    it('Get filtrando por nome de uma cidade e recebe array com os resultados e status code 200', async () => {
        let filter = 'inserir busca aqui'
        await request.get(`${SERVICE}/filter/name/${filter}`)
            .expect(function (res) {
                assert.isArray(res.body);
                assert.equal(res.statusCode, '200');
            });
    });

    it('Get filtrando por estado de uma cidade e recebe array com os resultados e status code 200', async () => {
        let filter = 'inserir busca aqui'
        await request.get(`${SERVICE}/filter/state/${filter}`)
            .expect(function (res) {
                assert.isArray(res.body);
                assert.equal(res.statusCode, '200');
            });
    });

});