import { describe, expect, it, test } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should contain the provided status code, message and data', () => {
    const testStatusCode =202;
    const testMsg = "test msg";
    const testdata = {key : 'test'}

    const testError = new HttpError(testStatusCode,testMsg,testdata)

    expect(testError.statusCode).toBe(testStatusCode);
    expect(testError.message).toBe(testMsg);
    expect(testError.data).toBe(testdata);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatusCode =202;
    const testMsg = "test msg";


    const testError = new HttpError(testStatusCode,testMsg)

    expect(testError.statusCode).toBe(testStatusCode);
    expect(testError.message).toBe(testMsg);
    expect(testError.data).not.toBeDefined();
  })
});

describe('class ValidationError', () => {
  it('should contain the provided message', () => {
      const testMsg = 'test';
      const valError = new ValidationError(testMsg);

      expect(valError.message).toBe(testMsg);
  })
});