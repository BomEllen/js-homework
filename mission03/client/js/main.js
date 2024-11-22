
import { data } from './data.js';





const buttons = document.querySelectorAll(".nav button");
const body = document.querySelector("body");
const visualImg = document.querySelector(".visual img");
const nickName = document.querySelector(".nickName");



buttons.forEach((button, index) => {
  button.addEventListener("click", () => {

    const selectedData = data[index]; 


    // 바디 배경 색 변경
    body.style.background = `linear-gradient(to bottom, ${selectedData.color[0]}, ${selectedData.color[1]})`;
    

    // visual 정보 변경
    visualImg.src = `./assets/${selectedData.name.toLowerCase()}.jpeg`; 
    visualImg.alt = selectedData.alt; 
    

    // 이름 변경
    nickName.innerText = selectedData.name; 
    


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























