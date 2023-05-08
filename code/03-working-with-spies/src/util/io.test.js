import { it, expect ,vi } from 'vitest';
import { promises as fs } from 'fs';
import writeData from './io';
import path from 'path';

vi.mock('fs')
vi.mock('path',()=>{
  return {
    default:{
      join: (...args)=>{
        return args[args.length-1]
      }
    }
  }
})


it('should execute write File and promise is resolved',()=>{
const text = 'test data';
const fileName = " test.txt";
writeData(text,fileName);
expect(writeData(text,fileName)).resolves.toBeUndefined()
expect(fs.writeFile).toBeCalled()
expect(fs.writeFile).toBeCalledWith(fileName,text)
})