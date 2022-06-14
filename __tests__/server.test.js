'use strict';

const supertest = require('supertest');
const app = require('../src/server').app;
const request = supertest(app);

describe('Server Tests', () => {
    it('Responds with a 200 status code to a get request to '/'', async () => {

        const response = await request.get('/');
        expect(response.status).toEqual(200);
    });

    test ('Hello route works', async () => {
        const response = await request.get('/hello');
        expect(response.status).toEqual(200)
    })
});
