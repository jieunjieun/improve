function reverseInteger(x) {
  if (!is32BitInteger(x)) return 0;
  let isMinus = false;
  let tempX = x;
  
  if (x < 0) {
    isMinus = true;
    tempX *= -1
  }
  const intStr = String(tempX).split("").reverse().join("");
  const result = isMinus ? Number(intStr) * -1 : Number(intStr);
  return is32BitInteger(result ) ? result : 0;
}

function is32BitInteger(x) {
  return (x > Math.pow(-2, 31) && x < Math.pow(2, 31) -1);
}

console.log(reverseInteger(123))
console.log(reverseInteger(-123))
console.log(reverseInteger(120))
console.log(reverseInteger(1534236469))