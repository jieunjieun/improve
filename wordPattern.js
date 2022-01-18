function wordPattern(pattern, s) {

  const splittedPattern = pattern.split('');
  const splittedString = s.split(' ');

  const patternToBinary = logic(splittedPattern);
  const stringToBinary = logic(splittedString);
  return patternToBinary === stringToBinary
}

function logic(sArray) {
  const arr = []
  for(let i = 0; i<sArray.length; i++) {
    if (!arr.includes(sArray[i])) {
      arr.push(sArray[i])
    }
  }

  for(let i = 0; i<sArray.length; i++) {
    sArray[i] = arr.indexOf(sArray[i]);
  }

  return sArray.join('');

}

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));