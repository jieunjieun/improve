// function solution(participant, completion) {
//   for(let i = 0; i< completion.length; i++) {
//     const idx = participant.indexOf(completion[i])
//     if (idx >= 0) {
//      participant.splice(idx, 1); 
//     }
//   }
//   return participant.join('');
// }

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for(let i = 0; i< participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i]
    }
  }
}


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))