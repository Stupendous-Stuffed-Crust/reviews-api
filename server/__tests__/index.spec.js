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
        const reviews = [
          {
            'id': '36',
            'product_id': '16',
            'rating': 5,
            'date': '1591138525724',
            'summary': 'Qui cupiditate temporibus est doloremque.',
            'body': 'Expedita porro laudantium incidunt ut sapiente sapiente ut aliquam. At omnis sed commodi molestiae ut libero. Et qui omnis.',
            'recommend': true,
            'reported': false,
            'reviewer_name': 'Gussie84',
            'reviewer_email': 'Madalyn98@hotmail.com',
            'response': 'null',
            'helpfulness': 0,
          },
          {
            'id': '37',
            'product_id': '16',
            'rating': 5,
            'date': '1588805707211',
            'summary': 'Quis autem id iure doloribus quod.',
            'body': 'Ipsum provident et et deserunt itaque sit nihil molestiae quos. Architecto ut inventore laudantium recusandae earum iure non. Eum quo vel odio voluptatem adipisci facilis est.',
            'recommend': true,
            'reported': false,
            'reviewer_name': 'Alexander_Brown',
            'reviewer_email': 'Itzel.Grant23@gmail.com',
            'response': 'null',
            'helpfulness': 16,
          },
          {
            'id': '38',
            'product_id': '16',
            'rating': 5,
            'date': '1614814028791',
            'summary': 'Saepe est quos cum et nostrum quia nulla.',
            'body': 'Numquam mollitia voluptatem non cumque laborum sint sed beatae voluptas. Consequatur aperiam reprehenderit qui. Illum accusamus aut ipsa quibusdam. Expedita deserunt enim magni accusantium est voluptatem nihil ducimus nisi. At dicta possimus hic.',
            'recommend': true,
            'reported': false,
            'reviewer_name': 'Sherwood.Zulauf',
            'reviewer_email': 'Kaylee.Abbott9@hotmail.com',
            'response': 'null',
            'helpfulness': 21,
          },
          {
            'id': '39',
            'product_id': '16',
            'rating': 5,
            'date': '1595724751285',
            'summary': 'Quis ad sapiente corrupti.',
            'body': 'Ea aut provident. Labore dolorum ipsum quam aperiam qui qui rerum perferendis provident. Repellendus architecto necessitatibus dolorem. Debitis excepturi adipisci.',
            'recommend': true,
            'reported': false,
            'reviewer_name': 'Elna57',
            'reviewer_email': 'Veronica_Fahey17@yahoo.com',
            'response': 'null',
            'helpfulness': 16,
          },
          {
            'id': '40',
            'product_id': '16',
            'rating': 1,
            'date': '1605810667548',
            'summary': 'Vel voluptas at ab cupiditate.',
            'body': 'Et eius fuga quisquam qui. Quo sunt ratione quis. Eius alias excepturi inventore tenetur quos consequatur dicta sapiente. Consequatur autem quis rerum enim error deleniti blanditiis.',
            'recommend': false,
            'reported': false,
            'reviewer_name': 'Reese_Gibson',
            'reviewer_email': 'Sadie.Jerde12@gmail.com',
            'response': 'null',
            'helpfulness': 10,
          },
        ];
        request
          .get('/reviews?product_id=16')
          .expect(200)
          .then((response) => {
            expect(response.status).toEqual(200);
            expect(response.body).toStrictEqual(reviews);
            done();
          });
      });
    });
  });
});
