const request = require('supertest');
const app = require('./app'); // Assuming your Express app is in app.js

describe('GET /api/posts', () => {
    test('It should respond with status 200', async () => {
        const response = await request(app).get('/api/posts');
        expect(response.status).toBe(200);
      }, 10000); // Increase timeout to 10 seconds (10000ms)
  });

  test('It should respond with JSON', async () => {
    const response = await request(app).get('/api/posts');
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test('It should respond with an array of posts', async () => {
    const response = await request(app).get('/api/posts');
    expect(Array.isArray(response.body)).toBe(true);
  });
});
