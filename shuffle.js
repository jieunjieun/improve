function shuffle(nums, n) {
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr.push(nums[i])
    arr.push(nums[i+n])
  }

  return arr;
}

shuffle([2,5,1,3,4,7], 3)
shuffle([1,2,3,4,4,3,2,1], 4)
shuffle([1,1,2,2], 2)