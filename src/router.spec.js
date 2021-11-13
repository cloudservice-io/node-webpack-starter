import request from 'supertest';
import { createService } from './lib/createService';

let service;

const initializeService = async () => {
  jest.setTimeout(120000);
  service = await createService();
};

describe('Routers', () => {
  beforeAll(initializeService);

  it('Renders a greeting message', async () => {
    const response = await request(service).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message.includes('Good')).toBe(true);
  });
});
