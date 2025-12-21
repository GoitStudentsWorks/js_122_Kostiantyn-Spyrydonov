export function initMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const burgerButton = document.querySelector(".burger-button");
  const closeButton = document.querySelector(".close-button");

  // Проверяем наличие элементов, чтобы не было ошибок в консоли
  if (!mobileMenu || !burgerButton || !closeButton) return;

  const toggleMenu = () => {
    mobileMenu.classList.toggle("is-open");
    // Блокируем скролл страницы при открытом меню
    document.body.classList.toggle("no-scroll");
  };

  burgerButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  // Закрытие при клике на любую ссылку внутри меню
  mobileMenu.addEventListener("click", (e) => {
    // Если кликнули по ссылке ИЛИ по самой подложке (оверлею)
    if (e.target.closest('a') || e.target === mobileMenu) {
      if (mobileMenu.classList.contains("is-open")) {
        toggleMenu();
      }
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      toggleMenu();
    }
  });
}