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
  const index = attr(target, "data-index") - 1;
  setImage(e, target);
  setBgColor(index);
  setName(index);
  playAudio(index);
}
nav.addEventListener("click", _.throttle(handleClick, 300));

function setImage(event, target) {
  attr(visualImg, "src", event.target.src);
  attr(visualImg, "alt", event.target.alt);
  [...navLi].forEach((e) => {
    removeClass(e);
  });
  if (!target) return;
  addClass(target, "is-active");
}

function setBgColor(index) {
  const colorA = data[index].color[0];
  const colorB = data[index].color[1];
  document.body.style.background = `linear-gradient(to bottom, ${colorA},${colorB})`;
}

function playAudio(index) {
  audios[index].play();
}

function setName(index) {
  const nickName = document.querySelector(".nickName");
  nickName.textContent = data[index].name;
}
