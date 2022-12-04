<<<<<<< HEAD
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
=======
function solution(my_string, n) {
  let answer ="";
  let result = []
  for(let i = 0; i < my_string.length; i++){
     result = answer.fill(my_string[i] ,  n*i, ( n*(i+1)-1))
  }
  return answer;
}
console.log(solution("faa",3));
// let m = "string"
// console.log(m[1])
>>>>>>> a55af618f3eebbbfb97d8848a6dcd351c3cc0d12
