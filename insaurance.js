document.addEventListener("DOMContentLoaded", () => {

  const reveal = document.querySelectorAll(".reveal");

  const animate = () => {
    reveal.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 120) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", animate);
  animate();

  document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => {
      document.getElementById(card.dataset.scroll)
        .scrollIntoView({behavior:"smooth"});
    });
  });

});
