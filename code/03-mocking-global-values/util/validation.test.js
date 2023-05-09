import { it, expect, expectTypeOf } from 'vitest';

import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
    const text = '';
    const testMsg = 'test';

    let testFun = ()=>{
      validateNotEmpty(text)
    }

    expect(testFun).toThrow()
});

it('should throw an error if an empty string is provided as a value', () => {
  const text = '   ';
  const testMsg = 'test';

  let testFun = ()=>{
    validateNotEmpty(text)
  }

  expect(testFun).toThrow()
});

it('should throw an error with the provided error message', () => {
  const text = '   ';
  const testMsg = 'test';

  let testFun = ()=>{
    validateNotEmpty(text,testMsg)
  }

  expect(testFun).toThrow(testMsg)
});