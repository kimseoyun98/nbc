//문자열 내 마음대로 정렬하기

function solution(strings, n) {
    let result = [];

		// 문자열 가장앞 글자 붙인 문자 배열 만들기
    for (let i = 0; i < strings.length; i++) {
      strings[i] = strings[i][n] + strings[i];
        // > car:i번째 어절, a:n번째 음절-> a+car-> acar
    }

		// 문자열 사전순 정렬
    strings.sort(); // > [ 'acar', 'ebed', 'usun']

		// 앞글자[n] 제거 후 리턴
    for(let j = 0; j < strings.length; j ++) {
      strings[j] = strings[j].replace(strings[j][0],""); //j에 있는 0번째를 빈 값 "" 으로 만들어
      result.push(strings[j]); //push=끼워넣기
    }

    return result;
    
}
console.log(solution(["sun", "bed","car"],1));

function result(a){
let result=[1,2,3,4,5];
console.log(result);
}
result(1)//[1,2,3,4,5]
result([1])// [1,2,3,4,5]
