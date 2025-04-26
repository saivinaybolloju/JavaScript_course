function filterObjectProperties(obj,minlen){
    const result = {};
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].length >= minlen) {
      result[key] = obj[key];
    }
  }
  return result;
}
const data = { a: "short", b: "longer string", c: 123, d: "very long string indeed" };
const filtered = filterObjectProperties(data, 6);
console.log(filtered); // Expected output: { b: 'longer string', d: 'very long string indeed' }