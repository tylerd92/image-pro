import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test image route endpoints', () => {
  it('gets 200 when sending resize image request', async () => {
    const response = await request.get(
      '/api/images/?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('return 500 when resize image route has invalid height', async () => {
    const response = await request.get(
      '/api/images/?filename=fjord&width=200&height=0'
    );
    expect(response.status).toBe(500);
  });

  it('return 500 when resize image route is sent a file not in full folder', async () => {
    const response = await request.get(
      '/api/images/?filename=invalid&width=200&height=200'
    );
    expect(response.status).toBe(500);
  });

  it('return a message when width entered is not a number', async () => {
    const response = await request.get(
      '/api/images/?filename=fjord&width=xyz&height=200'
    );
    expect(response.text).toBe(
      'The width you entered is not a number. Please enter a number greater than zero.'
    );
  });

  it('return a message when height entered is not a number', async () => {
    const response = await request.get(
      '/api/images/?filename=fjord&width=200&height=xyz'
    );
    expect(response.text).toBe(
      'The height you entered is not a number. Please enter a number greater than zero.'
    );
  });
});
