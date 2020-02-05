



// 요소 가져오기
const replInput = document.querySelector('.repl-input');
const replBtn = document.querySelector('.repl-btn');
// console.log(othersRepl);
const othersRepl = document.querySelector('.others-repl');
const replThreeDot = document.querySelector('.repl-hover-three-dot');

const USER_ID = 'zuzu';



// function handleInputDel(event) {
//   if (!replInput) {
//     replBtn.classList.add('opacity-0-5')
//     replBtn.classList.remove('opacity-1-0')
//   } else {
//     replBtn.classList.remove('opacity-0-5')
//     replBtn.classList.add('opacity-1-0')
//   }

// }



function paintRepl(event) {
  event.preventDefault();
  event.stopPropagation();
  if (replInput.value) {

    // 요소 생성하기
    const replVal = replInput.value;
    const span = document.createElement('span');
    const anchor = document.createElement('a');
    const buttonHeart = document.createElement('button');
    const buttonThreeDot = document.createElement('button');
    const imgHeart = document.createElement('img');
    const imgThreeDot = document.createElement('img');

    // 뿌릴 위치 가져오기
    const repls = document.querySelector('.feed-repls');
    // 화면에 뿌리기 :: 최하단부터

    anchor.innerHTML = USER_ID;
    anchor.href = '#';
    anchor.classList.add('user-id');
    imgHeart.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
    imgThreeDot.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png';
    buttonHeart.type = 'button';
    buttonHeart.classList.add('heart-btn');
    buttonThreeDot.type = 'button';
    buttonThreeDot.classList.add('repl-hover-three-dot');
    buttonThreeDot.classList.add('hidden');
    span.classList.add('others-repl');
    buttonThreeDot.appendChild(imgThreeDot);
    buttonHeart.appendChild(imgHeart);
    span.appendChild(anchor);
    span.append(replVal);
    span.appendChild(buttonThreeDot);
    span.appendChild(buttonHeart);
    repls.appendChild(span);
    // console.log(repls);
    replInput.value = '';
    replBtn.classList.remove('opacity-1-0')
    replBtn.classList.add('opacity-0-5')
  }
}

function handleInputText(event) {
  // console.log(event);
  /**
   * 아래 repleInput 만썻 을때 왜  다지웠을때 이벤트 적용이 안됬는가?
   * 
   * 이유 > input창 자체는 요소, 요소는 항상존재하기때문에 참일수밖에 없다.
   * 즉. input만 참인지 보는 것이 아닌 그 속의내용 즉 밸류까지 넣어야 한다는 말!!!
   * .value를 항시 주의하자! ㅠㅠ 바부멍뚱이.
   */
  if (replInput.value) {
    console.log('내용있음', replInput.value.length);
    // replBtn.style.opacity = '1';
    // 위 코드도 작동 되지만, 요소의 속성을 수정하는 것보다 클래스를 변경하는 것이 확인, 수정 용이하다.
    replBtn.classList.remove('opacity-0-5')
    replBtn.classList.add('opacity-1-0')


    if (event.code === 'Enter') {
      console.log('내용없음 엔터', replInput.value.length);
      console.log('그만 되시죠');
      paintRepl(event);
    }

  }
  // else if (replInput.value.length === 0) {
  //   console.log('내용없음', replInput.value.length);

  //   // replBtn.style.opacity = '0.5';
  //   replBtn.classList.remove('opacity-1-0')
  //   replBtn.classList.add('opacity-0-5')
  //   // replBtn.disable = true;
  //   replBtn.removeEventListener('click', paintRepl, true);
  //   // 왜 글자가 없는데 안꺼져????
  // }

}


function handleDelMenu(event) {
  // 페이지 만들기 시졍.. 그냥 누르면 삭제할뀨 
  console.log(replThreeDot.parentNode);
  replThreeDot.parentNode.remove();

}

function handleReplHoverDel(event) {
  if (event.type === 'mouseover') {
    replThreeDot.classList.remove('hidden');
    replThreeDot.classList.add('visible');
  }
  // replThreeDot.addEventListener('click', handleDelMenu);
}
function handleReplOutDel(event) {
  replThreeDot.classList.remove('visible');
  replThreeDot.classList.add('hidden');
}


function init() {
  replInput.addEventListener('keyup', handleInputText);
  // document.addEventListener('key', paintRepl);
  // othersRepl.addEventListener('mouseover', handleReplHoverDel);
  // othersRepl.addEventListener('mouseout', handleReplOutDel);
  replBtn.addEventListener('click', paintRepl);
}
init();



// 같은 클래스 네임을 갖는 모든애들한테 이밴트 적용하눈거는 어또케하징?
// 반복문 써야 하나 ? ... 내일은 반복문을 해보기로훼유~