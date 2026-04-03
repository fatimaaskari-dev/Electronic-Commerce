document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  const userToggles = document.querySelectorAll(".user-toggle");
  const closeUserMenus = () => {
    document.querySelectorAll(".user-menu").forEach((menu) => {
      menu.classList.add("hidden");
    });
  };

  userToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const parent = toggle.closest(".relative");
      if (!parent) return;
      const menu = parent.querySelector(".user-menu");
      if (!menu) return;
      menu.classList.toggle("hidden");
    });
  });

  document.addEventListener("click", closeUserMenus);

  document.querySelectorAll(".user-menu").forEach((menu) => {
    menu.addEventListener("click", (event) => event.stopPropagation());
  });
});

const products = document.querySelectorAll(".product");

products.forEach(function (product) {
  product.addEventListener("click", function () {
    const btn = product.querySelector(".cartBtn");

    btn.classList.toggle("opacity-0");
  });
});

const categorySlides = document.querySelectorAll(
  ".categorySwiper .swiper-slide",
);

// categorySlides.forEach((slide) => {
//   slide.addEventListener("click", function () {
//     if (!this.dataset.active) {
//       this.style.backgroundColor = "#DB4444"; // رنگ سفارشی
//       this.style.color = "#ffffff"; // متن سفید
//       this.style.transition = "background-color 0.75s"; // تغییر رنگ خیلی آهسته
//       this.dataset.active = "true";
//     } else {
//       this.style.backgroundColor = "";
//       this.style.color = "";
//       this.dataset.active = "";
//     }
//   });
// });

// Mobile nav toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const tabletMenuBtn = document.getElementById("tabletMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileBackdrop = document.getElementById("mobileBackdrop");

if ((mobileMenuBtn || tabletMenuBtn) && mobileMenu && mobileBackdrop) {
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileBackdrop.classList.toggle("hidden");
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMenu);
  }

  if (tabletMenuBtn) {
    tabletMenuBtn.addEventListener("click", toggleMenu);
  }

  mobileBackdrop.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileBackdrop.classList.add("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileBackdrop.classList.add("hidden");
    });
  });
}


