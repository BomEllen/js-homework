
import { data } from './data.js';





const buttons = document.querySelectorAll(".nav button");
const bodyElement = document.querySelector("body");
const visualImg = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");


// 바디 배경 색 변경 함수
function setBgColor(color) {
  bodyElement.style.background = `linear-gradient(to bottom, ${color[0]}, ${color[1]})`;
}


// 이미지 정보 변경 함수
function setImg(element, name, alt) {
  element.src = `./assets/${name.toLowerCase()}.jpeg`;
  element.alt = alt || "이미지 정보가 없습니다";
}


// 이름 변경 함수
function setNameText(element, name) {
  element.innerText = name;
}




// 버튼 클릭 이벤트 적용
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedData = data[index];

    
    // 함수 실행
    setBgColor(selectedData.color);
    setImg(visualImg, selectedData.name, selectedData.alt);
    setNameText(nickName, selectedData.name);


    // 우선 버튼의 모든 부모 요소에서 'is-active' 클래스를 지워주고,
    // 버튼이 눌리면 버튼의 부모 요소에 'is-active' class를 추가해준다.
    buttons.forEach((button) => {
      const parent = button.parentElement;
      parent.classList.remove("is-active");
    });

    button.parentElement.classList.add("is-active");
  });
});

























/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/























