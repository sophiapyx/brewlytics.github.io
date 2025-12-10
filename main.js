const container = document.querySelector(".container");
const sections = container.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const items = document.querySelectorAll(".nav-item");

// CLICKING A RECTANGLE SCROLLS TO THE SECTION
items.forEach(item => {
  item.addEventListener("click", () => {
    const target = document.querySelector(item.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


container.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const offset = section.offsetTop;
    const height = section.offsetHeight;

    if (container.scrollTop >= offset - height / 2) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Source - https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
// Posted by Joseph Silber, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-19, License - CC BY-SA 3.0

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});