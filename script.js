let lastScrollTop = 0;
const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("nav.mobile");
const mobileNavLinks = document.querySelectorAll("nav.mobile ul a");
const filterTags = document.querySelectorAll(
  ".portfolio .filter-tags button.tag",
);
const portfolioItems = document.querySelectorAll(
  ".portfolio .project-cards .card",
);
let isTicking = false;

const setMobileNavState = (isOpen) => {
  if (!mobileNav) return;
  mobileNav.classList.toggle("active", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "auto";
};

const onScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (header) {
    if (scrollPosition > lastScrollTop) {
      header.classList.add("scrolled");
    } else if (scrollPosition < lastScrollTop) {
      header.classList.remove("scrolled");
    }
  }
  lastScrollTop = Math.max(scrollPosition, 0);
  isTicking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (!isTicking) {
      window.requestAnimationFrame(onScroll);
      isTicking = true;
    }
  },
  false,
);

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    setMobileNavState(!mobileNav.classList.contains("active"));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && mobileNav.classList.contains("active")) {
      setMobileNavState(false);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNav.classList.contains("active")) {
      setMobileNavState(false);
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const target = href ? document.querySelector(href) : null;
      setMobileNavState(false);
      if (target) {
        event.preventDefault();
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    });
  });
}

const updatePortfolioFilters = (selectedFilter) => {
  const showAll = selectedFilter === "all";
  portfolioItems.forEach((item) => {
    const shouldDisplay = showAll || item.classList.contains(selectedFilter);
    item.style.display = shouldDisplay ? "" : "none";
  });
};

filterTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    filterTags.forEach((otherTag) => otherTag.classList.remove("selected"));
    tag.classList.add("selected");
    updatePortfolioFilters(tag.id);
  });
});
