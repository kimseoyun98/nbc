// let age = 25;
// let isMember = true;

// // 나이가 18세 이상이고 회원이어야 접근 가능
// if (age >= 18 && isMember === true) {
//   console.log("접근 허용");
// } else {
//   console.log("접근 불가");
// }
// //축약가능
// if (age>= 25 && isMember) {
//     console.log("접근 허용");
//   } else {
//     console.log("접근 불가");
//   }

// let isLoggedIn = false;
// let isAdmin = true;

// // 로그인 상태이고 관리자여야 접근 가능
// if (isLoggedIn !== false && isAdmin) {
//   console.log("관리자 페이지에 접근 가능");
// } else {
//   console.log("관리자 페이지에 접근 불가");
// }

// let isLoggedIn = false;
// let isNotAdmin = true;

// // 로그인 상태이거나 관리자여야 접근 가능
// if (!isLoggedIn || !isNotAdmin) {
//   console.log("관리자 페이지에 접근 가능");
// } else {
//   console.log("관리자 페이지에 접근 불가");
// }
//isNotLoggedIN이 boolean타입이니까 ! 가능

// let purchaseAmount = 150;
// let isGoldMember = false;
// let isSilverMember = true;

// // 구매 금액이 100 이상이고 isGoldMember거나 실버 회원이면 할인을 적용
// if (purchaseAmount >= 100 && (!isGoldMember || isSilverMember)) {
//   console.log("할인 적용");
// } else {
//   console.log("할인 미적용");
// }

//이렇게도가능!!

// function checkDiscount (purchaseAmount,isGoldMember,isSilverMember)
// if (purchaseAmount >= 100 && (!isGoldMember || isSilverMember)) {
//     console.log("할인 적용");
//   } else {
//     console.log("할인 미적용");
//   }

//   checkDiscount(150,false,true);

// if (purchaseAmount >= 100) {
//   // 여기서 체크
//   if (isGoldMember === true && isSilverMember === true) {
//     console.log("할인 적용");
//   } else {
//     console.log("할인 미적용");
//   }
// } else {
//   console.log("할인 미적용");
// }

// 인자로 들어가는 함수를 콜백함수라고 함
// const fruits = ["사과", "오렌지", "포도"];
// const result = fruits.map(function (f) {
//   //   return f;
// });
// console.log(result);

// const 회원명부 = [
//   {
//     이름: "홍길동",
//     나이: 25,
//     성별: "male",
//   },
//   {
//     이름: "홍길순",
//     나이: 30,
//     성별: "female",
//   },
//   {
//     이름: "홍길자",
//     나이: 40,
//     성별: "female",
//   },
// ];

// const is회원명부 = 회원명부.filter(function (p) {
//   if (p.나이 >= 35 && p.성별 === "female") {
//     return true;
//   }
// });
// console.log(is회원명부);
// filter 함수를 사용해서, 35세 이상의 사람 중(&&) 여자만 필터링

// const is회원명부 = 회원명부.find(function (p) {
//   if (p.성별 === "female") {
//     return true;
//   }
// });

// const 원본배열 = [4, 10, 5, 20, 2];

// // 원본배열.sort((a, b) => b - a); //내림차순
// // console.log(원본배열);

// 원본배열.sort(function (하나, 둘) {
//   return 둘 - 하나;
// });
// console.log(원본배열);
// //[ 20, 10, 5, 4, 2 ]

// //문자는 정렬이 안됨! 문자끼리 비교해서 내보내는 방법은 localeCompare
// const result = ["apple", "banana"];

// const result = "apple".localeCompare;
// console.log(result);

// // (1) 원본배열 영향 있음
// // (2) sort도 callback 함수를 가진다
// // (3) 이 callback함수는 인자(input)가 2개
// // (4) 이 callback함수의 return에 필요한 것은 '숫자'
// // (5) 숫자로 이루어진 배열을 정렬할 때는 b-a 가능
// // (6) 문자로 이루어진 배열을 정렬할 때는 localCompare 필요

// function sortArray(arr) {
//   // 여기에 sort를 사용하여 작성하세요
//   const result = arr.sort(function (인자1, 인자2) {
//     return 인자2 - 인자1;
//   });
//   return result;
// }
// function sortArray2(arr) {
//   // 여기에 sort를 사용하여 작성하세요
//   const result = arr.sort(function (인자2, 인자1) {
//     return 인자2.localeCompare(인자1);
//   });
//   return result;
// }

// // 예시 출력
// console.log(sortArray([3, 1, 4, 1, 5, 9])); // 출력: [1, 1, 3, 4, 5, 9]
// console.log(sortArray2(["바나나", "사과", "포도"])); // 출력: ['바나나', '사과', '포도']

function sortArray2(arr) {
  // 여기에 sort를 사용하여 작성하세요
  const result = arr.sort(function (인자1, 인자2) {
    return 인자2.localeCompare(인자1);
  });
  return result;
}
console.log(sortArray2(["사과", "바나나", "포도"]));
