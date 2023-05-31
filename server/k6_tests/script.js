import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 500,
  duration: '1m30s',
};

export default function () {
  const productId = Math.floor(Math.random() * 1000011);
  http.get(`http://localhost:3000/reviews?product_id=${productId}`);
  sleep(1);
}
