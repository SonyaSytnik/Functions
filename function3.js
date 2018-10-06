'use strict'

function plus1(a) {
  return a + 1;
}

const sum = function (a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const func1 = (a, b) => {
  const s = sum(a, b);
  return Math.pow(s, 2);
};

console.log(`plus1 = ${plus1(1)}`);
console.log(`sum = ${sum(1, 2)}`);
console.log(`max = ${max(1, 2)}`);
console.log(`func1 = ${func1(1, 2)}`);
