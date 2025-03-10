document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
      el.classList.add("revealed");
    }
  });
});
document.addEventListener("load", () => {
  document.querySelectorAll(".reveal-auto").forEach((el) => {
    el.classList.add("revealed");
  });
});
