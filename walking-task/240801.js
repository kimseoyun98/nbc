const a = {
  국어: 90,
  영어: 80,
  수학: 100,
};

// 논리 연산자(&& 또는 ||)를 활용하여 아래의 조건을 만족하는 코드를 작성해주세요.
// 출력: true

// 국어, 영어, 수학 점수가 모두 80점 이상이면 true, 아니면 false를 반환해주세요.
function checkGrade(a) {
  return a.국어 >= 80 && a.영어 >= 80 && a.수학 >= 80;
}

console.log(checkGrade(a));

let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

// sort() 메서드를 활용하여 다음과 같은 결과가 나오도록 코드를 작성해 주세요.
// 결과: ['김병연', '김르탄', '내배캠', '박가현', '윤창식', '최원장']

// 튜터님 이름이 담긴 배열을 가나다순으로 정렬하는 코드를 작성해주세요.
// 이 아래에 코드를 작성해주세요!
// function sortArray(arr) {
//   // 여기에 sort를 사용하여 작성하세요
//   arr.sort(function (인자1, 인자2) {
//     return 인자1.localeCompare(인자2);
//   });
// }
// sortArray(tutorNames);
tutorNames.sort(function (인자1, 인자2) {
  return 인자1.localeCompare(인자2);
});
console.log(tutorNames);

// const numbers = [3, 7, 8, 5, 9, 12, 15];

// // find() 메서드를 활용하여 첫 번째로 짝수를 찾는 함수를 구현합니다.
// // 출력 결과: 8

// // 힌트
// // 1. find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
// // 2. 즉, 숫자 배열에서 짝수를 찾아야 합니다.
// // 3. find() 메서드는 콜백 함수를 인자로 받습니다.
// // 4. 콜백 함수는 주어진 요소가 짝수인지 판별합니다.
// // 5. 짝수를 찾으면 true를 반환합니다.
// function findFirstEvenNumber(numbers) {
//   // 함수 내부를 채워주세요!
//   return numbers.find(function (number) {
//     return number % 2 === 0;
//   });
// }

// console.log(findFirstEvenNumber(numbers));

// // 주의) 실제 근무 시간과 다릅니다!
// const tutors = [
//   {
//     이름: "최원장",
//     출근시간: 9,
//     퇴근시간: 18,
//   },
//   {
//     이름: "윤창식",
//     출근시간: 9,
//     퇴근시간: 21,
//   },
//   {
//     이름: "박가현",
//     출근시간: 13,
//     퇴근시간: 18,
//   },
//   {
//     이름: "김병연",
//     출근시간: 13,
//     퇴근시간: 21,
//   },
// ];

// // find() 메서드를 활용하여 출근시간이 9시이면서 퇴근시간이 21시인 튜터를 찾아주세요!

// // 힌트
// // 1. find() 메서드를 사용해 tutors 배열을 순회합니다.
// // 2. 순회하면서 tutor 객체를 하나씩 가져옵니다.
// // 3. tutor 객체의 출근시간과 퇴근시간을 동시에 비교하여 조건에 맞는 tutor를 찾습니다.

// function find9to21Tutor(tutors) {
//   return tutors.find(function (tutor) {
//     return tutor.출근시간 === 9 && tutor.퇴근시간 === 21;
//   });
// }

// console.log(find9to21Tutor(tutors));
// // 출력 결과: { 이름: "윤창식", 출근시간: 9, 퇴근시간: 21 }
