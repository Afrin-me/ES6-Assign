// : L0 - Convert to Arrow Function with Default Parameters

let multiply = (x = 1, y = 1) => {
  return x * y;
};
console.log(multiply());
console.log(multiply(3, 4));