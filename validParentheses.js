function isValid(s) {
  if (s.length === 0 || s.length % 2 !== 0) return false;

  const openBrackets = ['(', '{', '[']
  const closeBrackets = [')', '}', ']']
  let stack = [];

  for (let b of s) {
    if (openBrackets.includes(b)) {
      stack.push(b);
    } else {
      const currPop = stack.pop(); 
      if (!currPop || currPop !== openBrackets[closeBrackets.indexOf(b)]) {
        return false;
      }
    }
  }

  return stack.length === 0
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
