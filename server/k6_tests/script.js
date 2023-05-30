import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 500,
  duration: '1m30s',
};

export default function () {
  http.get('http://localhost:3000/reviews?product_id=998999');
  sleep(1);
}
