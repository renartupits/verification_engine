import request from 'supertest';
import {closeServer, createServer} from '../../src/app';
import {Express} from 'express';

describe('Verification Checks API', () => {
  let app: Express;

  beforeAll(async () => {
    app = await createServer();
  });

  afterAll(async () => {
    await closeServer();
  });

  it('GET /some/undefined/route - should return 404 for undefined route', async () => {
    const response = await request(app).get('/api/some/undefined/route');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: 'Route not found',
      statusCode: 404,
    });
  });

  it('GET /verification/checks/list - should return list of check items', async () => {
    const response = await request(app).get('/api/verification/checks');
    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(String), description: expect.any(String), priority: expect.any(Number) }),
      ])
    );
  });

  it('POST /verification/checks/submit - should accept check results and return success false', async () => {
    const response = await request(app).post('/api/verification/checks/submit').send({
      results: [
        { checkId: '1', result: 'yes' },
        { checkId: '2', result: 'no' },
      ],
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: false,
    });
  });

  it('POST /verification/checks/submit - should return success message when all check results are "yes"', async () => {
    const response = await request(app).post('/api/verification/checks/submit').send({
      results: [
        { checkId: 'aaa', result: 'yes' },
        { checkId: 'bbb', result: 'yes' },
        { checkId: 'ccc', result: 'yes' },
      ],
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
    });
  });
});
