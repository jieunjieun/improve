// function removeDuplicates(nums) {
//   nums = Array.from(new Set(nums));
//   return nums.length;
// }

// function removeDuplicates(nums) {
//   let uniqNumArr = [];
//   for(let i = 0; i< nums.length; i++) {
//     if (uniqNumArr.includes(nums[i])) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       uniqNumArr.push(nums[i]);
//     }  
//   }
//   return nums.length;
// }

function removeDuplicates(nums) {
  let index = 0;
  for (let i = 1; i< nums.length; i++) {
    if (nums[index] === nums[i]) {
      nums[index] = nums[i]
      index++;
    }
  }
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDuplicates([1,1,2]))