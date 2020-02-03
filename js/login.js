const inputId = document.querySelector('input[type=text]');
const inputPw = document.querySelector('input[type=password]');
const showPw = document.querySelector('.hide-show-pw-btn');

// console.dir(inputId);
// console.dir(inputPw);






function handleShowPwBtn(event) {
  // console.log(event);
  // event.preventdefault();
  // event.stopPropagation();
  // >>>> 폼태그 안에 작성시 버튼 타입 꼭 적자. 
  // type ='button' or type = 'submit' 중 쓰라구용. 그냥 썹밋으로 설정 ! 무한리셋의 굴래~안쓰면 디폴트이벤트 제거 안됨!.. 
  console.log(event);
  const showPwVal = showPw.innerHTML;
  // console.log(showPwVal);

  if (showPwVal === '비밀번호 표시') {
    showPw.innerHTML = '숨기기';
    showPw.style.left = '216px';
    inputPw.type = 'text';

  } else {
    showPw.innerHTML = '비밀번호 표시'
    showPw.style.left = '180px';
    inputPw.type = 'password';
  }


}

function handleKeypress(event) {
  // console.log('keydown - 이벤트작동');
  const submitBtn = document.querySelector('.submit-btn');
  // if (inputId.value.length > 0 && inputPw.value.length > 0) {
  // >>>>> 어처피 inputId.value 에 뭐시가 입력 되기만 하면 참이기 때문에 렝스 같은거 안해도 된당!!!
  if (inputId.value && inputPw.value) {
    submitBtn.style.opacity = '1';
  } else {
    submitBtn.style.cssText = 'opacity:0.4;'
    // 이 방법보다는 위 방식으로 하자구요~
  }
  // 비밀번호 보기

  if (inputPw.value) {
    console.log(inputPw.value)
    showPw.style.visibility = 'visible';
    showPw.addEventListener('click', handleShowPwBtn);

  } else {
    showPw.style.visibility = 'hidden';
  }
}




function init() {
  // 이벤트리스터 : 인풋창에 키가 눌렸을때 > 1자 이상이면 버튼 활성화
  inputId.addEventListener('input', handleKeypress);
  inputPw.addEventListener('input', handleKeypress);
  // 키프레스 1칸 덜먹을때  > 인풋 넣으면 인풋 넣자마자 발생됨!
}
init();