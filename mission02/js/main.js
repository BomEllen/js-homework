
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}



// id/pw 확인하는 정규표현식
function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}






const form = document.querySelector("form");


function login(event) {
  event.preventDefault(); // 페이지 새로고침 방지

  const getId = form.querySelector('[name="userEmail"]').value;
  const getPw = form.querySelector('[name="userPassword"]').value;

  
  
  
  // 이메일과 비밀번호 유효성 체크
  if (!emailReg(getId)) {
    alert("이메일을 형식에 맞게 작성해주십시오.")
    return;
  }

  if (!pwReg(getPw)) {
    alert("비밀번호를 형식에 맞게 작성해주십시오.");
    return;
  }




  if (getId === user.id && getPw === user.pw) {
    movePage("welcome.html");
  } else {
    alert("🚨아이디 혹은 비밀번호가 틀렸습니다");
  }
}

form.addEventListener("submit", login);




// 페이지 이동 함수
function movePage(pageUrl) {
  window.location.href = pageUrl;
}










function loginCheck(id, pw) {
  //가져온 아이디를 내 아이디랑 비교
  

  //가져온 비번을 내 비번이랑 비교


  //둘다 맞다면 
  
  //페이지로 이동
  
}

































