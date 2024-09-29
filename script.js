const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function page4animation() {
  var elemcon = document.querySelector("#elem-container");
  var img = document.querySelector("#fixed-images");
  elemcon.addEventListener("mouseenter", function () {
    img.style.display = "block";
  });
  elemcon.addEventListener("mouseleave", function () {
    img.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      img.style.backgroundImage = `url(${image})`;
    });
  });
}
function swipper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    initialSlide: 1,
  });
}
function menu(){
  let full = document.querySelector("#full-scr");
let menu = document.querySelector("#nav-part-3");
let navimg = document.querySelector("nav img");
let closemen = document.querySelector(".menu");
let left = document.querySelector("#left")
let right = document.querySelector("#right")
menu.addEventListener("click", function () {
  event.preventDefault();
    full.style.top = "0%";
    navimg.style.opacity = 0;
    menu.style.opacity = 0;
    left.style.opacity = 0;
    right.style.opacity = 0;
  });
  closemen.addEventListener("click", function(){
    full.style.top = "-100%";
    navimg.style.opacity = 1;
    menu.style.opacity = 1;
    left.style.opacity = 1;
    right.style.opacity = 1;
})
}
function loaderanimation(){
  var load = document.querySelector("#loader");
setTimeout(function(){
load.style.top = "-100%";
},3900)
}
swipper();
page4animation();
menu();
loaderanimation();




