// tests/app.test.ts
import request from 'supertest';
import app from '../src/app';

describe('GET /hello', () => {
  it('responds with 200 and "Hello, World!"', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
