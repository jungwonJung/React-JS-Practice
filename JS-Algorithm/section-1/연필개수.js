function solution(a) {
  let answer = Math.ceil(a / 12);

  return answer;
}

console.log(solution(121));

// Math.ceil 나머지가 있을경우 몫을 올려버림
// Math.floot 나머지가 있을경우 몫을 내려버림
// Math.round 반올림
