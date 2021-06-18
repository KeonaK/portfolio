const hamburgerBtn = document.querySelector("#hamburgerBtn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
// creates an array
const hasFade = document.querySelectorAll(".has-fade");

hamburgerBtn.addEventListener("click", () => {
  // check if the header has the open class
  //closes menu
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    hasFade.forEach((i) => {
      i.classList.remove("fade-in");
      i.classList.add("fade-out");
    });
    //open menu
  } else {
    header.classList.add("open");
    hasFade.forEach((i) => {
      i.classList.remove("fade-out");
      i.classList.add("fade-in");
    });
  }
});
