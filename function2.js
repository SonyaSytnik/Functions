const plus1 = a => a + 1;
const sum = (a, b) => a + b;
const max = (a, b) => (a > b ? a : b);

console.log('Names : ');
console.dir({
  plus1: plus1.name,
  sum: sum.name,
  max: max.name,
});

console.log('Arguments : ');
console.dir({
  plus1: plus1.length,
  sum: sum.length,
  max: max.length,
});

console.log(
  `Anonymous function : ${
    function (x) {
      return x;
    }.name
  }`,
);
console.log(`Anonymous lambda : ${(x => x).name}`);

console.log(' toString : ');
console.dir({
  plus1: plus1.toString(),
  sum: sum.toString(),
  max: max.toString(),
});
