function climbStairs(n) {
  if (n === 0 || n === 1) return 1;
  let arr = [];
  arr[1] = 1;
  arr[2] = 2;
  
  for(let i = 3; i<=n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n]
}

console.log(climbStairs(1))
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));