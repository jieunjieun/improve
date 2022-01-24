function detectCapital(word) {  
  const isAllCapitalWord = /^[A-Z]*$/g.test(word)
  const isAllSmallWord = /^[a-z]*$/g.test(word)
  const isNormalWord = /^[A-Z]{1}[a-z]+$/.test(word)
 
  return isAllCapitalWord || isAllSmallWord || isNormalWord
}

console.log(detectCapital('USA'))
console.log(detectCapital('FlaG'))
console.log(detectCapital('g'))
console.log(detectCapital('Google'))