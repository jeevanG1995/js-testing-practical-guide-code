import { expect, it } from "vitest";
import {transformToNumber} from './numbers'


it("should convert str to a number if the str is a valid number",()=>{
    const strNum='666';
    const expRes = Number(strNum);
    const res =transformToNumber(strNum)
    expect(res).toBe(expRes);
    expect(res).toBeTypeOf("number");
})

it("should convert str to a number if the str is a valid floating number",()=>{
    const strNum='666.987';
    const expRes = Number(strNum);
    const res =transformToNumber(strNum)
    expect(res).toBe(expRes);
    expect(res).toBeTypeOf("number");
})

it("should convert str to a number if the str is a valid -ve integer ",()=>{
    const strNum='-666.987';
    const expRes = Number(strNum);
    const res =transformToNumber(strNum)
    expect(res).toBe(expRes);
    expect(res).toBeTypeOf("number");
})

it("should return Nan if the str is not a valid number ",()=>{
    const strNum='two';
    const res =transformToNumber(strNum)
    expect(res).toBeNaN()

})

it("should throw error if no value is passed ",()=>{
    const res =transformToNumber(   )
    expect(res).toBeNaN()

})