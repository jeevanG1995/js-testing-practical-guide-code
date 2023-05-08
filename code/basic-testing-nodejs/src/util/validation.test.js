import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty(str)",()=>{
it("Should not throw error when a valid string is apssed",()=>{
    const strIp = 'input123'
    const fun_res = ()=>{
        validateStringNotEmpty(strIp)
    
    }
    expect(fun_res).not.throws()
})

it("Should  throw error when a series of spaces is passed",()=>{
    const strIp = '   '
    const fun_res = ()=>{
        validateStringNotEmpty(strIp)
    
    }
    expect(fun_res).throws()
})

it("Should  throw error when a new line and carriage return is passed",()=>{
    const strIp = ' \n \r  '
    const fun_res = ()=>{
        validateStringNotEmpty(strIp)
    
    }
    expect(fun_res).throws()
})

it("Should  throw error when nothing is passed",()=>{

    const fun_res = ()=>{
        validateStringNotEmpty()
    
    }
    expect(fun_res).throws()
})
});

describe("validateNumber(num)",()=>{

it("Should not throw error when a valid number is passed",()=>{
    const num = 123.897
    const fun_res = ()=>{
        validateNumber(num)
    
    }
    expect(fun_res).not.throws()
})

it("Should  throw error when Nan is passed",()=>{
    const num = NaN
    const fun_res = ()=>{
        validateNumber(strIp)
    
    }
    expect(fun_res).throws()
})

it("Should  throw error when a number as string is passed",()=>{
    const strIp = '12'
    const fun_res = ()=>{
        validateNumber(strIp)
    
    }
    expect(fun_res).throws()
})
});