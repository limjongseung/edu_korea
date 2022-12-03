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