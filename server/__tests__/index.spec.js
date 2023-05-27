const supertest = require('supertest');
const app = require('../index');

const request = supertest.agent(app);

describe('API tests', function () {

    it('should return the reviews for the a given product', (done) => {
        request
            .get('/reviews?product_id=16')
            .expect(200)
            .then(response => {
                expect(response.status).toEqual(200);
                expect(response.body).toBeDefined();
                done();
            });
        });
});