// script.js

// Плавный переход к якорю при нажатии на ссылки
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Можно добавить дополнительные интерактивные элементы, если нужно
// Например: всплывающее окно, копирование ссылки и пр.
