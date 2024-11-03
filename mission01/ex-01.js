
// 처음 시도했던 코드 ( 함수의 매개변수 제외시킴 )

// const book = {
//   name: "소년이 온다",
//   author: "한강",
//   publication: 2014,
//   publisher: "창비",
// };

// function getValueAtObject() {

//   let objectName = prompt("찾고자 하는 객체의 이름을 입력해주세요");

//   if (objectName.toLowerCase() === "book") {
//     let keyName = prompt("해당 객체에서 찾고 싶은 키 값의 이름을 입력해주세요");
    
//     if (keyName.toLowerCase() === "name") {
//       alert("책 이름은 '소년이 온다' 입니다.");
//     } else if (keyName.toLowerCase() === "author") {
//       alert("작가님 성함은 '한강' 입니다.");
//     } else if (keyName.toLowerCase() === "publication") {
//       alert("출판년도는 2014년 입니다.");
//     } else if (keyName.toLowerCase() === "publisher") {
//       alert("출판사는 '창비'입니다. ");
//     } else {
//       alert("🚨ERROR🚨");
//     }
//   } else {
//     alert("🚨ERROR🚨");
//   }
// }

// getValueAtObject();



// 매개변수 포함

const book = {
  name: "소년이 온다",
  author: "한강",
  publication: 2014,
  publisher: "창비",
};

function getValueAtObject(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    return "🚨ERROR🚨";
  }
}

console.log(getValueAtObject(book, 'name')); 
console.log(getValueAtObject(book, 'ranking')); 