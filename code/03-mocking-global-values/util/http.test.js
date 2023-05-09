import { it, vi, expect } from 'vitest';

import { sendDataRequest } from './http';
import { HttpError } from './errors';


const testResponseData ={
  testKey:'testData'
}
const testFetch = vi.fn((url , options)=>
{
    return new Promise((resolve,reject)=>{
      if(typeof(options.body) != 'string'){
        return reject('Not a string body')
      }
      const testRespone = {
        ok:true,
        json:()=> {
          return new Promise((resolve,reject)=>{
            resolve(testResponseData);
          })
        }
      }
      resolve(testRespone)
    })
})

vi.stubGlobal('fetch',testFetch)


it('should return any available response data', () => {
  const testData = { key: 'test' };

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert json to string before sending the request',async () => {
  const testData = { key: 'test' };
  let errorMsg ;
  try{
    await sendDataRequest(testData)
  }
  catch(error){
    errorMsg = error;
  }

  expect(errorMsg).not.toBe('Not a string body')
 
});


it('should throw error when OK is false from the response',async () => {
  const testData = { key: 'test' };
testFetch.mockImplementationOnce((url , options)=>
{
    return new Promise((resolve,reject)=>{
      if(typeof(options.body) != 'string'){
        return reject('Not a string body')
      }
      const testRespone = {
        ok:false,
        json:()=> {
          return new Promise((resolve,reject)=>{
            resolve(testResponseData);
          })
        }
      }
      resolve(testRespone)
    })
});

expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError)
 
});
