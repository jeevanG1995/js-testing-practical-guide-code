import {describe,it,expect,vi} from 'vitest'
import {extractPostData} from './posts'
import { beforeEach } from 'vitest';


const testTitle= 'Test Title';
const testContent = 'Test Constant';

let testFormData        ;

describe('extractPostData()',()=>{
    beforeEach(()=>{
        testFormData = {
            title:testTitle,
            content:testContent,
            get(identifier){
                return this[identifier];
            }
        };
    })
    it('should extract the title and content of the form data',()=>{
        const data = extractPostData(testFormData);
        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    })
})