let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > lastScrollTop) {
      header.classList.add("scrolled");
    } else if (scrollPosition < lastScrollTop) {
      header.classList.remove("scrolled");
    }
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
  },
  false,
);

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("nav.mobile");
const mobileNavLinks = document.querySelectorAll("nav.mobile ul a");
menuToggle.addEventListener("click", () => {
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
    document.body.style.overflow = "auto";
  } else {
    mobileNav.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    mobileNav.classList.remove("active");
    document.body.style.overflow = "auto";

    setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  });
});


const filterTags = document.querySelectorAll(".portfolio .filter-tags button.tag");
const portfolioItems = document.querySelectorAll(".portfolio .project-cards .card");
filterTags.forEach((tag) => {
  tag.addEventListener('click', () => {
    filterTags.forEach((tag) => {
      tag.classList.remove('selected');
    })
    tag.classList.add('selected');

    if(tag.id === 'all') { 
      portfolioItems.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
        portfolioItems.forEach((item) => {
          if(item.classList.contains(tag.id)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        })
    }
  })
})