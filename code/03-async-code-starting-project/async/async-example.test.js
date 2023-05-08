import { expect, it } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';


it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';
  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();

    try {
      console.log(token)
      expect(token).not.toBeDefined();
      return expect(token).toBe(2);
      done();
    } catch (err) {
      console.log('error', err)
      done(err);
    }

  });




});


it('should generate a token value with promise', () => {
  const testUserEmail = 'test@test.com';

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()

});

it('should generate a token value with promise with await', async () => {
  const testUserEmail = 'test@test.com';
  const res = await generateTokenPromise(testUserEmail)
  expect(res).toBe(2)

});