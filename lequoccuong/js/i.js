let myNumber = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 0 }];
let result = myNumber.some(function (a, index) {
  console.log(index);
  return a.number > 0;
});
console.log(result);