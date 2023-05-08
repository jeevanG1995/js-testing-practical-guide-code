import {describe, expect, it} from 'vitest'
import { add } from './math'

describe("Add test",()  => {
it("should summarize all number values in the array",()=>{
    const numbers =[1,2,3]
    const expRes = numbers.reduce((preValue,currValue)=> preValue+currValue,0)
    const res= add(numbers);
    expect(res).toBe(6);
});

it("should yield Nan if at least one invalid value is passed",()=>{
    const numbers =[1,'invalid'];
    const expRes = numbers.reduce((preValue,currValue)=> preValue+currValue,0);
    const res= add(numbers);
    expect(res).toBeNaN();
});


it("should yield numeric value if numbers are passed as string",()=>{
    const numbers =["1",'2'];
    const expRes = numbers.reduce((preValue,currValue)=> +preValue + +currValue,0);
    const res= add(numbers);
    expect(res).toBe(expRes);
});

it("should yield 0 if empty array is passed",()=>{
    const numbers  = [];
    const res = add(numbers);
    expect(res).toBe(0);
});

it("should yield error if no array is passed",()=>{
const resFn = ()=>{
    add();
}
    expect(resFn).toThrow();
});

it("should yield error if numbers are passed as multiple parameters",()=>{
    const num1=1;
    const num2=2;
    const resFn = ()=>{
        add(num1,num2); 
    }
        expect(resFn).toThrow(/is not iterable/);
    });

})