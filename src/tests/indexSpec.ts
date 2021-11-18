import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test route endpoints', () => {
  it('gets the base api route endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets the base images route endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});