function isPalindrome(x) {
  if (x < 0) return false;  
  const convertStr = String(x).split("").reverse().join("");
  return convertStr == x;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));