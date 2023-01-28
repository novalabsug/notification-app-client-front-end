export const mainFunc = () => {
  const navbar = document.querySelector(".main-nav");
  let lastScrollIndex = 0;

  window.addEventListener("scroll", (e) => {
    const currentScrollIndex = window.scrollY;

    if (currentScrollIndex <= 0) {
      navbar.classList.remove("scroll-up");
    }

    if (
      currentScrollIndex > lastScrollIndex &&
      !navbar.classList.contains("scroll-down")
    ) {
      navbar.classList.remove("scroll-up");
      navbar.classList.add("scroll-down");
    }

    if (
      currentScrollIndex < lastScrollIndex &&
      navbar.classList.contains("scroll-down")
    ) {
      navbar.classList.remove("scroll-down");
      navbar.classList.add("scroll-up");
    }

    lastScrollIndex = currentScrollIndex;
  });

  const mobileNavOpen = document.querySelector("#mobile-nav-open-btn");
  const mobileNavClose = document.querySelector("i#mobile-nav-close-btn");
  const mobileNav = document.querySelector("#mobile-nav");

  mobileNavOpen.addEventListener("click", () => {
    console.log("clicked");
    mobileNav.classList.add("show");
  });

  mobileNavClose.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
};
