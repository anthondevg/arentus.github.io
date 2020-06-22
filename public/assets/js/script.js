// script for main Navigation
var navTrigger = document.querySelector(".navTrigger");
var mainList = document.getElementById("mainListDiv");

navTrigger.addEventListener("click", (e) => {
  navTrigger.classList.toggle("active");

  mainList.classList.toggle("show_list");
});

var links = document.querySelectorAll(".navlinks a");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    console.log("console", e.target);
    navTrigger.classList.toggle("active");
    mainList.classList.toggle("show_list");
  });
}
