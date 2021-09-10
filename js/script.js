const navToggler = document.querySelector(".navbar-toggler");
const navCollapse = document.querySelector(".navbar-collapse");

navToggler.addEventListener("click", () => {
  navCollapse.classList.toggle("showNav");
});

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Designer", { delay: 400 })
  .pause(500)
  .delete(12)
  .type("Web Developer", { delay: 400 })
  .pause(500)
  .delete(14)
  .go();

///button
const buttons = document.querySelectorAll("a");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("h6");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});

/*gsap*/
gsap.registerPlugin(ScrollTrigger);
