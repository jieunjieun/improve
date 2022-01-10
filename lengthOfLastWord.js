function lengthOfLastWord(s) {
  const trimArr = s.trim().split(/\s+/)
  return trimArr[trimArr.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
