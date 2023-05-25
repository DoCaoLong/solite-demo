let btnExit = document.querySelector(".btn-qr__exit");
let btnNext = document.querySelector(".btn-qr__next");
btnExit.addEventListener("click", function(){
  window.location.pathname = "index.html"
})
btnNext.addEventListener("click", function () {
   window.location.pathname = "step1/step1.html";
})