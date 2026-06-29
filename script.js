let hamburger = document.querySelector(".navbar__hamburger");
let navLinks = document.querySelector(".navbar__links");
let navabr = document.querySelector(".navabr");

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
})