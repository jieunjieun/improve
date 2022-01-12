function mostWordsFound(sentences) {
  let max = 0;
  for(let i = 0; i<sentences.length; i++) {
    const wordCnt = sentences[i].split(" ").length
    if (max < wordCnt) {
      max = wordCnt
    }
  }
  return max;
}

// console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))
