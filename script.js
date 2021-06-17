const hamburgerBtn = document.querySelector("#hamburgerBtn");
header = document.querySelector(".header");

hamburgerBtn.addEventListener("click", () => {
  // check if the header has the open class
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
