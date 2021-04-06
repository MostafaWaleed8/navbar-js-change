const navBar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  const windowState = window.scrollY > 0;
  navBar.classList.toggle("scrolled", windowState);
});
