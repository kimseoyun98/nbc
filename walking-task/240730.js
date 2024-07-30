// let shoppingList = ["우유", "계란", "아이스크림", "목살"];

// // 여기에 코드를 작성하세요.
// shoppingList.pop();
// shoppingList.push("삼겹살");

// console.log(shoppingList);

// // 출력 : [ '우유', '계란', '아이스크림', '삼겹살' ]

// let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

// // 여기에 코드를 작성하세요.
// // forEach 메서드를 사용해 배열을 순회하세요.
// // '걷기반 튜터님'만 콘솔에 출력되도록 조건문을 사용하세요. -> 논리합연산자(||)를 활용해보세요.
// // '걷기반 튜터님'이 누군지는 다 알고 계시죠? 🥹

// tutorNames.forEach(function (tutor) {
//   if (
//     tutor === "최원장" ||
//     tutor === "윤창식" ||
//     tutor === "김병연" ||
//     tutor === "박가현"
//   ) {
//     console.log(tutor);
//   }
// });

//if(조건문){조건문이 참일때 실행되는 부분}
//forEach는 return이 없다 return해도 undefined나옴

// let tutors = [
//   {
//     name: "최원장",
//     time: "9to6",
//   },
//   {
//     name: "윤창식",
//     time: "9to6",
//   },
//   {
//     name: "박가현",
//     time: "9to6",
//   },
//   {
//     name: "김병연",
//     time: "9to6",
//   },
// ];

// // 여기에 코드를 작성하세요.
// // 멘토링 상태를 확인할 수 있는 불리언 타입의 isMentoring 속성을 추가합니다.
// const newTutors = tutors.map(function (Mentoring) {
//   const newMentoring = {
//     name: Mentoring.name,
//     time: "9to6",
//     isMentoring: "true",
//   };
//   return newMentoring;
// });

// console.log(newTutors);

let starbucks = [
  {
    name: "카페 라떼",
    icedOnly: false,
  },
  {
    name: "콜드 브루",
    icedOnly: true,
  },
  {
    name: "돌체 라떼",
    icedOnly: false,
  },
  {
    name: "돌체 콜드 브루",
    icedOnly: true,
  },
];

// 여기에 코드를 작성하세요.
// 아이스 전용 커피 배열을 만듭니다.
const icedOnly = starbucks.filter(function (ice) {
  return ice.icedOnly === true;
});
console.log(icedOnly);
