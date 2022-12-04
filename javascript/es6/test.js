function solution(n) {
  let answer = n.toString();

  let result = 0
  for(let i = 0; i < n.length; i++){
       result += Number(answer[i]);
  }
  return result
}
console.log(solution(123123))
//!     자릿수 더하기
function solution(n) {
  let result = 0;
let answer = "";
n = n.toString();
for(let i = 0; i < n.length; i++){
  result += parseInt(n[i]);
}
return result
}