function scrollToApply() {
  document.getElementById("apply").scrollIntoView({
    behavior: "smooth"
  });
}
const sections = document.querySelectorAll("section");
const tabs = document.querySelectorAll(".tab-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  tabs.forEach(tab => {
    tab.classList.remove("active");
    if (tab.getAttribute("href") === "#" + current) {
      tab.classList.add("active");
    }
  });
});