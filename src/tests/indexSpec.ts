import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test route endpoints', () => {
  it('gets 200 when sending resize image request', async () => {
    const response = await request.get('/api/images/?filename=fjord&width=200&height=200');
    expect(response.status).toBe(200);
  });

  it('return 500 when resize image route has invalid height', async () => {
    const response = await request.get('/api/images/?filename=fjord&width=200&height=0');
    expect(response.status).toBe(500);
  });

  it('return 500 when resize image route is sent a file not in full folder', async () => {
    const response = await request.get('/api/images/?filename=yukon&width=200&height=200');
    expect(response.status).toBe(500);
  });
});