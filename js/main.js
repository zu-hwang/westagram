



// 요소 가져오기
const replInput = document.querySelector('.repl-input');
const replBtn = document.querySelector('.repl-btn');
console.log(replBtn);





function handleInputText(event) {
  // 인풋 창에 글자 하나라도 써지면 게시 버튼 활성화
  if (replInput) {
    replBtn.style.opacity = '1';
  } else {
    replBtn.style.opacity = '0.5';
    // 왜 글자가 없는데 안꺼져????
  }
}


function init() {
  replInput.addEventListener('input', handleInputText);
}
init();