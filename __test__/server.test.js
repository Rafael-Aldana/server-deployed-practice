const { app } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(app);
const { logger } = require('../middleware/logger');
// you can use it or test because youre testing something and it should do something. You can also use toBe or toEqual
describe('API server', () => {
  it('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('this is a log');
  });

  test('handles invalid requests', async () => {
    const response = await mockRequest.get('/invalid');

    expect(response.status).toEqual(404);
  });

  test('handles error', async () => {
    const response = await mockRequest.get('/bad');
    console.log(response);
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });
});
