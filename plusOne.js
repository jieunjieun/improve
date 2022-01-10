// function plusOne(digits) {
//   const arrToNum = digits.join('')
//   return String(arrToNum + 1).split('');
// }

function plusOne(digits) {
  const addedArr = [];
  let nextPlus = true;

  for(let i = digits.length - 1; i >= 0; i--) {
    const digPlusOne = nextPlus ? digits[i] + 1 : digits[i];
    if (digPlusOne >= 10) {
      nextPlus = true;
      addedArr.push(digPlusOne % 10);
    } else {
      nextPlus = false;
      addedArr.push(digPlusOne);
    }
  }

  if (!!nextPlus) {
    addedArr.push(1)
  }

  return addedArr.reverse()
}

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
