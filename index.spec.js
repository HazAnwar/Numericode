import app from './index';
import request from 'supertest';

describe('messages from server', () => {
  afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });

  it('should exist', async done => {
    expect(app).toBeDefined();
    done();
  });

  it('should return the correct result when 13 27 26 5 is passed', async done => {
    const res = await request(app).get(`/numericode/13 27 26 5`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.code.toString().replace(/,/g, '')).toEqual('MAZE');
    done();
  });

  it('should return the correct result when 432 21 19 5832 5 135 14 6561 59049 15 486 275562 is passed', async done => {
    const res = await request(app).get(
      `/numericode/432 21 19 5832 5 135 14 6561 59049 15 486 275562`
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body.code.toString().replace(/,/g, '')).toEqual('PUSHEENICORN');
    done();
  });

  it('should return the correct result when 20 486 21 513 19 324 5 21924 540 135 3 8 is passed', async done => {
    const res = await request(app).get(
      `/numericode/20 486 21 513 19 324 5 21924 540 135 3 8`
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body.code.toString().replace(/,/g, '')).toEqual('TRUSSLE TECH');
    done();
  });

  it('should return the correct result when 8 5 324 8748 295245 730 23 405 13122 12 108 is passed', async done => {
    const res = await request(app).get(
      `/numericode/8 5 324 8748 295245 730 23 405 13122 12 108`
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body.code.toString().replace(/,/g, '')).toEqual('HELLO WORLD');
    done();
  });
});
