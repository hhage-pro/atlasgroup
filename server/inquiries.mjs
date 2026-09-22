export const services = ['Real estate','Insurance','Mortgages','Construction','Not sure yet'];
export function validateInquiry(input) {
  const value = {};
  for (const [key, limit] of Object.entries({name:100,email:254,service:40,message:3000})) {
    if (typeof input?.[key] !== 'string') return {error:'Please complete all required fields.'};
    value[key] = input[key].trim();
    if (!value[key] || value[key].length > limit) return {error:'Please check the length of your '+key+'.'};
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email) || /[\r\n]/.test(value.email)) return {error:'Please enter a valid email address.'};
  if (!services.includes(value.service)) return {error:'Please choose a service.'};
  if (input.consent !== true) return {error:'Please agree to be contacted about this inquiry.'};
  return {value};
}

export function makeLimiter({max=5,windowMs=15*60*1000}={}) {
  const attempts = new Map();
  return function allow(key,now=Date.now()) {
    for (const [k,v] of attempts) if(now-v.start>windowMs) attempts.delete(k);
    const record=attempts.get(key) || {start:now,count:0};
    record.count++; attempts.set(key,record);
    return record.count<=max;
  };
}
