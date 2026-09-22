import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateInquiry,makeLimiter} from '../server/inquiries.mjs';
const valid={name:'Website Test',email:'test@example.com',service:'Real estate',message:'A synthetic inquiry.',consent:true};
test('accepts a valid inquiry and trims user input',()=>assert.equal(validateInquiry({...valid,name:' Test '}).value.name,'Test'));
test('rejects missing consent, unknown services and header injection',()=>{
  for(const input of [{...valid,consent:false},{...valid,service:'bogus'},{...valid,email:'a@example.com\r\nBcc: x@example.com'}]) assert.ok(validateInquiry(input).error);
});
test('rejects unbounded messages and nonstring input',()=>{
  assert.ok(validateInquiry({...valid,message:'x'.repeat(3001)}).error);
  assert.ok(validateInquiry({...valid,name:{}}).error);
});
test('rate limiter expires and isolates clients',()=>{
 const allow=makeLimiter({max:2,windowMs:100});
 assert.equal(allow('a',0),true);assert.equal(allow('a',1),true);assert.equal(allow('a',2),false);
 assert.equal(allow('b',2),true);assert.equal(allow('a',101),true);
});
