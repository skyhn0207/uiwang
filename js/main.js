/* introduce swiper */
var swiper = new Swiper(".introduce", {
  loop: true,
  navigation: {
    nextEl: ".introduce_nbtn",
    prevEl: ".introduce_pbtn",
  },
});

/* porgram swiper */
var swiper = new Swiper(".program", {
    navigation: {
      nextEl: ".program_nbtn",
      prevEl: ".program_pbtn",
    },
  });

$(document).ready(function(){
  /* 패밀리사이트 */
  $('.familysite_list > li > a').click(function(e){
    e.preventDefault()
    $(this).siblings('.link_wrap').toggleClass('active');
  });
})

/* 공지사항 스크립트 */
const list = document.querySelectorAll('.panel');
function activeLink(e){
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
  e.preventDefault()
}
list.forEach((item) => item.addEventListener('click', activeLink));

var nowZoom = 100;
var zoomin = document.querySelector('.zoomin');
var zoomre = document.querySelector('.zoomreset');
var zoomout = document.querySelector('.zoomout');

/* 화면확대 */
function zoomOut() {
nowZoom = nowZoom - 10;
if(nowZoom <= 70) nowZoom = 70;
zooms();
}
zoomout.addEventListener('click', zoomOut)

/* 화면축소 */
function zoomIn() {
nowZoom = nowZoom + 20;
if(nowZoom >= 200) nowZoom = 200;
zooms();
}
zoomin.addEventListener('click', zoomIn)

/* 화면리셋 */
function zoomReset() {
nowZoom = 100;
zooms();
}
zoomre.addEventListener('click', zoomReset)

/* 화면확대축소 알림 */
function zooms() {
document.body.style.zoom = nowZoom + "%";
if(nowZoom == 70) {
  alert("더 이상 축소할 수 없습니다.");   // 화면 축소율이 70% 이하일 경우 경고창
}
if(nowZoom == 200) {
  alert("더 이상 확대할 수 없습니다.");   // 화면 확대율이 200% 이상일 경우 경고창
}
}