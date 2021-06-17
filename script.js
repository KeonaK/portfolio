const hamburgerBtn = document.querySelector("#hamburgerBtn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

hamburgerBtn.addEventListener("click", () => {
  // check if the header has the open class
  //closes menu
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    //open menu
  } else {
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  }
});
