const container = document.querySelector(".container");
const sections = container.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

// CLICKING A RECTANGLE SCROLLS TO THE SECTION
navItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = document.querySelector(item.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// SCROLL DETECTION TO HIGHLIGHT ACTIVE RECTANGLE
container.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const offsetTop = section.offsetTop;
    const height = section.offsetHeight;

    if (container.scrollTop >= offsetTop - height / 2) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    item.classList.toggle("active", item.dataset.target === `#${currentSection}`);
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