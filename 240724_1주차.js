

// 문자열 내 p와 y의 개수

// function solution(s){
//     var result = true;
//     var num = 0;
//     for(var i = 0; i < s.length; i++){
//       if(s.toUpperCase()[i] === 'P') num++; // p이면 갯수 더하기
//       if(s.toUpperCase()[i] === 'Y') num--; // y이면 갯수 빼기
//     } 
//     result = (num === 0); // p, y 갯수가 같으면 0 (p가 많으면 양수, 반대 음수)
  
//     return result;
//   }
//   console.log(solution("pPoooyY"))
//   console.log(solution("Pyy"))








// 음양더하기
//   function solution(absolutes, signs) {
//     var answer = 0;
    
//     for(let i=0; i<absolutes.length; i++){
//         if(signs[i] === true){
//             answer += absolutes[i];    
//         }else if(signs[i] === false){
//             answer -= absolutes[i];
//         }
//     }
//     return answer;
// }