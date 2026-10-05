const menuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("mobile-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("mobile-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

}