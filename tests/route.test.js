import server from '../src/index';
import  request  from 'supertest';
import { expect } from 'chai';


describe('Routes API Tests', () => {
    it('GET /api/v1/routes/ returns an array of routes', async() => {
        const response= await request(server).get('/api/v1/routes/');
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an.instanceof(Array);
    })
})