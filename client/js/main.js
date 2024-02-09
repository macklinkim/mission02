/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
import {
  attr,
  getNode,
  removeClass,
  addClass,
  typeError,
} from "../lib/index.js";
const nav = getNode(".nav");
const navLi = nav.querySelectorAll("li");
const visual = getNode(".visual");
const visualImg = visual.querySelector("img");
const audios = loadAudio();

function loadAudio() {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(new AudioPlayer(data[i].audio));
  }
  return result;
}

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest("li");
  attr(visualImg, "src", e.target.src);
  [...navLi].forEach((e) => {
    removeClass(e);
  });
  if (!target) return;
  addClass(target, "is-active");

  audios[attr(target, "data-index") - 1].play();
  // counter();
}
nav.addEventListener("click", _.throttle(handleClick, 1000));

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const counter = createCounter();
