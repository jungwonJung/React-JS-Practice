function solution1(a, b, c) {
  let answer = "yes",
    max;
  let sum = a + b + c;
  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (c > answer) {
    max = c;
  }
  if (sum - max <= max) {
    answer = "no";
  }
  return answer;
}

console.log(solution1(6, 7, 11));

// 삼각형은 제일 긴 한 변의 길이가 나머지 두변의 길이보다 작아야한다

function solution1(a, b, c) {
  let answer = "yes",
    max;
  let sum = a + b + c;
  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (c > answer) {
    max = c;
  }
  if (sum - max <= max) {
    answer = "no";
  }
  return answer;
}

console.log(solution1(13, 33, 17));
