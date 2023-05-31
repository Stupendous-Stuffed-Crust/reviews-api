/* eslint-disable quote-props */
const supertest = require('supertest');
const createServer = require('../utils/server');
const { pool } = require('../db');

const app = createServer();
const request = supertest.agent(app);

afterAll(() => {
  pool.end()
    .then(console.log('Pool drained'));
});

describe('Reviews', () => {
  describe('get reviews route', () => {
    describe('return reviews for a given product', () => {
      it('should return the reviews for a given product', (done) => {
        const productId = Math.floor(Math.random() * 1000011);
        request
          .get(`/reviews?product_id=${productId}`)
          .expect(200)
          .then((response) => {
            expect(response.status).toEqual(200);
            expect(response.body).toBeDefined();
            done();
          });
      });
    });
  });
});
