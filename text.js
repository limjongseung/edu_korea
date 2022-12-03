function solution(my_string, letter) {
    answer = '';
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] == letter){
            answer.splice(i,1)
        } 
    }
    return answer
}
console.log(solution("fjfjfjfjf","f"))