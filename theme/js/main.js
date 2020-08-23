const selector = require("./_selector");

document.addEventListener("DOMContentLoaded", selector.init, false);

document.querySelector("#hamburger").addEventListener("click", () =>
{
  const container = document.querySelector("#hamburger-menu");
  if (container.classList.contains("visible"))
    container.style.height = "0px";
  else
    container.style.height = `${container.scrollHeight}px`;
  container.classList.toggle("visible");
});
