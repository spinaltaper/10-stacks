'use strict';

const list=require('../lib/list')
const stack=require('../lib/stack')
let Yong=new Stack();
describe('Stack tests')
test('Adds a value to the stack and checks for it',()=>{
    expect(Yong.push('Engram')).toBe(Yong.content==='Engram');
});
test ('Removes a value from the stack and checks to see if it is gone.',()=>{
    let result=currentValue;
    expect(Yong.pop()).toBe(result==='Engram' && Yong.content===null)
});