const selector = require("./_selector");

document.addEventListener("DOMContentLoaded", selector.init, false);

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () =>
{
  document.querySelector("#hamburger-menu").classList.toggle("visible");
});
