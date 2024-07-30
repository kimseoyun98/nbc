const arr = [30, 1, 2, 5, 40];

// // // TODO: 100을 넣기(끝에)
// // // TODO: 넣은 100을 빼내서(pop) 변수에 할당하기
// // // TODO: 할당한 100을 console.log에 찍어보기

arr.push(100);
const arr100 = arr.pop();
console.log(arr100);

// //*-- for each for문과 동일 = forEach() 메서드는 배열에 활용이 가능한 메서드 그러나 배열에서 하나하나의 value(=값)가 되기 때문에 매서드를 입힐수 없음

// // // for문을 이용해서 fruits의 모든 값을 console.log하는 방법

// // let fruits = {"사과" , "바나나"};
// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }

// //fruit.forEach(함수(매개변수){});
// //매개변수 만큼 함수를 실행
// //즉 요소 2 개를 가지고 있는 fruits 배열만큼 function이 두번 실행된다
// // let fruits = {"사과" , "바나나"};
// // fruits.forEach(function(여기변수){
// //     console.log(1);
// // }); // 1 1 이 두번나옴

// //같게 만들먄

// // for (let i=0; i<fruits.length; i++){
// //     console.log(1);
// // }

// // const testArr = ["윤창식", "최원장", "박가현", "김병연"];

// // testArr.forEach(function (i) {
// //     console.log(i);    
// // });
// //윤창식
// //최원장
// //박가현
// //김병연

// //forEach =배열의 매서드
// //이 배열 매서드는 input(매개변수)를 가진다
// //그 매개변수는 함수다
// //그 매개변수는 호출의 자체가 된 배열의 각 요소가 차례대로 할당됨

// // const testArr = [
// //     {
// //       name: "홍길동",
// //       age: 21,
// //     },
// //     {
// //       name: "홍길순",
// //       age: 23,
// //     },
// //     {
// //       name: "김르탄",
// //       age: 40,
// //     },
// //   ];

// // testArr.forEach(function (i){
// //     console.log(i.name);
// // })

// // testArr.forEach(function (i){
// //     if(i.age>=30)
// //     console.log(i.name);
// // })
// // //김르탄



// //*---map= 배열을 가공해 내보냄
// //// const testArr = ["윤창식", "최원장", "박가현", "김병연"];

// // testArr.map(function (i));
// //     console.log(i);
// //여기까지는 forEach랑 똑같아

// // const aa = testArr.forEach();
// //forEach는 아무것도 안보내  
// //ReferenceError: testArr is not defined


// // const testArr = ["윤창식", "최원장", "박가현", "김병연"];

// // const 결과값 = testArr.map(function (i) {
    
// // });
// // console.log(결과값); 
// // //[ undefined, undefined, undefined, undefined ]
// // //배열 길이만큼 언디파인 출력

// // const testArr = ["윤창식", "최원장", "박가현", "김병연"];

// // const 결과값 = testArr.map(function (i) {
// //    return i;
// // });
// // console.log(결과값); 
// // //제대로 나옴


// // //결과값 리턴에 10배 곱하고 싶다면?
// // const testArr = [3,1,2];

// // const 결과값 = testArr.map(function (i) {
// //    return i*10;
// // });
// // console.log(결과값); 
// // //[ 30, 10, 20 ]



// // //원래 있었던 배열을 가공을 할수도 있어
// // const people = [
// //     {
// //       id: 1,
// //       name: "홍길동",
// //       age: 30,
// //     },
// //     {
// //       id: 2,
// //       name: "홍길순",
// //       age: 15,
// //     },
// //     {
// //       id: 3,
// //       name: "김르탄",
// //       age: 16,
// //     },
// //   ];
  


// //   // 배열 복사
// //   const newPeople = people.map(function (person) {
   
// //    /*---원래 있었던 배열 가공을 위해---*/
   
// //    const newPerson = {
// //       id: person.id,
// //       name: person.name,
// //       age: person.age,
// //       isAdult: person.age >= 20,
// //     };
  
// //     return newPerson;
// //   });
// //   console.log(newPeople);

// const testArr = ["윤창식", "최원장", "김병연", "박가현"];

// const newArr = testArr.map(function (이름){
//     const 새로운요소 = {
//         name: 이름,
//         job: "tutor"
    
// }
// return 새로운요소;
// });
//    console.log(newArr); 
// // newArr의 값





// //*---filter=배열을 그대로 내보냄
// //조건을 넣지 않으면 필터로 다 걸러짐
// //리턴문(return)에 조건을 넣으면 됨!!
// //return에 true false값으로 if문 반복할지 말지
// //if(숫자>=10){
// // return true;
// // }else{
// //     return false;
// // }
// // });

// // 위 식을 쓰지 않고도 리턴으로 가능
// // return 숫자>=20;



// const tutors = [
//     {
//       name: "윤창식",
//       job: "tutor",
//     },
//     {
//       name: "최원장",
//       job: "developer",
//     },
//     {
//       name: "김병연",
//       job: "tutor",
//     },
//     {
//       name: "박가현",
//       job: "tutor",
//     },
//   ];
//   const realTutors = tutors.filter(function (t) {
//     //   if (t.job === "tutor") {
//     //     return true;
//     //   } else {
//     //     return false;
//     //   }
//     return t.job === "tutor"; //리턴으로 한줄로 해결 가능
//   });
//   console.log("realTutors => ", realTutors);


// //   filter가 리턴한게 배열이기 때문에 
// //   이렇게도 가능

// //   tutors.filter(function (t) {
// //     return t.job === "tutor";
// //   }).map (function (t) {
// //     return ~;
// //   }).forEach(function (t) {
// //   });

// //   forEach()에는 함수를 입힐수 없지만 forEach() 메서드는 배열에 활용이 가능한 메서드


const tutors = [
  {
    name: "윤창식",
    job: "tutor",
  },
  {
    name: "최원장",
    job: "developer",
  },
  {
    name: "김병연",
    job: "tutor",
  },
  {
    name: "박가현",
    job: "tutor",
  },
];

const realTutors=tutors.forEach(function (t) {
    return t.job !== "tutor";
    });
  console.log(realTutors);
//forEach 메서드의 반환값은 언제나 undefined다.