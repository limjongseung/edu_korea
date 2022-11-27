let string = "limjongseung"
function reverse(a){
  a="";
  let answer ="";
  for(let i = 0; i <a.length; i++){
    answer[i] = a[a.length -i];  
  }
  return answer
}
console.log(reverse(lim));
