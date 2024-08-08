//함수만들기
async function printTest() {
  //fetch로 api 주소로 불러와
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await result.json();
    //.json을 사용하여 자바스크립트가 읽을 수 있도록 변환 (비동기적으로 움직이니까 await 사용)
    //.json도 완성된 결과를 받으려면 기다려야 함

    console.log(users);

    const rootDiv = document.getElementsById("root");

    //1) id가 root인 div를 찾는다.
    //2) users 데이터를 가지고 1)에서 찾은 div에 넣을 코드 불러옴.
    //3) 1)에서 찾은 div에 끼워넣기!

    const 버튼태그 = document.createElement("button");
    const 새로만든DIV = document.getElementById("div");
    새로만든DIV.innerHTML = `
  <h2>${users[0].name}</h2>
  <p>사용자이름: ${users[0].username}</p> 
  <p>이메일: ${users[0].email}</p> 
`;

    for (let i = 0; i < users.length; i++) {
      const 새로만든DIV2 = document.getElementById("div");
      새로만든DIV.innerHTML = `
  <h2>${users[i].name}</h2>
  <p>사용자이름: ${users[i].username}</p> 
  <p>이메일: ${users[i].email}</p> 
`;
    }

    users.forEach(function (사람) {
      const 새로만든DIV3 = document.getElementById("div");
      새로만든DIV3.innerHTML = `
  <h2>${사람.name}</h2>
  <p>사용자이름: ${사람.username}</p> 
  <p>이메일: ${사람.email}</p> 
`;
      rootDiv.appendChild(새로만든DIV3);
    });
    // 자바스크립트 문법들어가는 부분은 $ 추가

    //이걸 여러개 만들기 위해서 매서드 함수 사용

    //rootDiv<document 라고 생각하면 된다. appendChild = 자식을 끼워넣을거야
    //div안에 p태그가 들어간것을 볼수 있음!
    rootDiv.appendChild(버튼태그);
    rootDiv.appendChild(새로만든DIV);
    rootDiv.appendChild(새로만든DIV2);

    /*---------------------------
<div id= "root">
  <button></button>
</div> 
-----------------------------*/
  } catch (error) {
    console.log(error);
  }

  // try블록안에서 문제가 생기면 catch로 빠진다
}
printTest();

//--------------filter함수--------------//
const 새로만든DIV4 = users.filter(function (user) {
  const userEmail = user.email;
  const 첫글자 = userEmail.slice(0, 1);
  if (첫글자 === "S") {
    return true;
  } else {
    return false;
  }
});

//--------------filter함수는 새로운 배열을 리턴하기 때문에 .forEach 할당 가능--------------//

const rootDiv = document.getElementById("root");

users
  .filter(function (user) {
    const userEmail = user.email;
    const 첫글자 = userEmail.slice(0, 1);
    if (첫글자 === "S") {
      return true;
    } else {
      return false;
    }
  })
  .forEach(function (사람) {
    const 새로만든DIV3 = document.getElementById("div");
    새로만든DIV3.innerHTML = `
  <h2>${사람.name}</h2>
  <p>사용자이름: ${사람.username}</p> 
  <p>이메일: ${사람.email}</p> 
`;
    rootDiv.appendChild(새로만든DIV3);
  });
