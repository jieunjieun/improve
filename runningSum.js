function runningSum(nums) {
  const res = [];
  res[0] = nums[0];

  for(let i = 1; i<nums.length; i++) {
    res[i] = res[i-1]+nums[i];
  }

  return res;
}

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))