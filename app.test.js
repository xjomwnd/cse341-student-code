const request = require('supertest');
const app = require('./app');

describe('GET /api/posts', () => {
    });
});
   test('It should respond with status 200', async () => {
        const response = await request(app).get('/api/posts');
        expect(response.status).toBe(200);
 