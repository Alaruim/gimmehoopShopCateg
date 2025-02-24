document.querySelectorAll(".dropdown-container").forEach(container => {
  // Обработчик клика на выбранный элемент
  container.querySelector(".selected").addEventListener("click", function () {
    container.querySelector(".dropdown").classList.toggle("show");
  });

  // Обработчик кликов по опциям
  container.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", function () {
      let selected = container.querySelector(".selected span");


      selected.innerText = this.innerText;

      // Обновляем скрытый селект
      const hiddenSelect = container.querySelector(".hidden-select");
      hiddenSelect.value = this.innerText;

      // Скрываем дропдаун
      container.querySelector(".dropdown").classList.remove("show");
    });
  });
});

  
//////////////////////////////////////////////////////////////////////
// Получаем все контейнеры с кнопками и полями ввода
const containers = document.querySelectorAll('.container-button');

containers.forEach(container => {
  const minusButton = container.querySelector('.minus-button');
  const plusButton = container.querySelector('.plus-button');
  const quantityInput = container.querySelector('#quantity');

  // Проверяем, что все элементы существуют внутри контейнера
  if (!minusButton || !plusButton || !quantityInput) {
    console.warn('Не все элементы найдены внутри контейнера', container);
    return;
  }

  // Функция для уменьшения значения
  minusButton.addEventListener('click', function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 0) {
      quantityInput.value = currentValue - 1; // Уменьшаем на 1, если значение больше 0
    }
  });

  // Функция для увеличения значения
  plusButton.addEventListener('click', function () {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 99) {
      quantityInput.value = currentValue + 1; // Увеличиваем на 1
    }
  });

  // Функция для обработки ввода
  quantityInput.addEventListener('input', function () {
    let value = this.value;

    // Убираем незначащие нули и запрещаем минус
    value = value.replace(/^0+/, ''); // Убираем ведущие нули
    value = value.replace(/-/g, '');   // Убираем символ минуса

    // Если значение пустое после удаления, ставим 0
    if (value === '') {
      value = '0';
    }

    // Ограничиваем диапазон от 0 до 99
    let numericValue = parseInt(value);
    if (numericValue < 0) {
      this.value = '0';
    } else if (numericValue > 99) {
      this.value = '99';
    } else {
      this.value = numericValue;
    }
  });
});


//////////////////////////////////////////////////////////////////////
// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true, // Циклический режим
  slidesPerView: 'auto',
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "Следующий"
    prevEl: '.swiper-button-prev', // Кнопка "Предыдущий"
  },
});
//////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
var swiper_hidden = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "Следующий"
    prevEl: '.swiper-button-prev', // Кнопка "Предыдущий"
  },
  effect: "cards",
  grabCursor: false,
  simulateTouch: false,
});


var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "Следующий"
    prevEl: '.swiper-button-prev', // Кнопка "Предыдущий"
  },
  simulateTouch: false,
});


// Код для кнопки .see-all-photo
const seeAllPhotoButton = document.querySelector(".see-all-photo");
const photoPopup = document.querySelector(".pop-cont");
const closeButton = document.querySelector(".close-popup");

document.addEventListener("click", function (event) {
  if (seeAllPhotoButton && seeAllPhotoButton.contains(event.target)) {
    photoPopup.classList.toggle("active");
  } else if (
    photoPopup && 
    !photoPopup.querySelector(".photo-popup").contains(event.target) && 
    !seeAllPhotoButton.contains(event.target)
  ) {
    photoPopup.classList.remove("active");
  }
});

// Закрытие по кнопке .close-popup
if (closeButton) {
  closeButton.addEventListener("click", function () {
    photoPopup.classList.remove("active");
  });
}

var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  loop: true,
  slidesPerView: "4",
  navigation: {
    nextEl: '#arrow-next', // Кнопка "Следующий"
    prevEl: '#arrow-prev', // Кнопка "Предыдущий"
  },
  simulateTouch: true,
});

const heroImage = document.getElementById("hero-image");
document.addEventListener("click", function (event) {
  const target = event.target;

  // Проверяем, кликнули ли по изображению с классом "slider-horiz-img"
  if (target.classList.contains("slider-horiz-img")) {
    // Получаем путь к изображению из атрибута src
    const newImageSrc = target.src;

    // Находим элемент с id "hero-image" и меняем его изображение
    
    if (heroImage) {
      heroImage.src = newImageSrc;
    }
  }
});

const overlayButton = document.querySelector(".overlay-img");
const heroImage1 = document.getElementById("hero-image");
const overlay = document.getElementById("overlay");

if (overlayButton) {
  overlayButton.addEventListener("click", function() {
    // Показываем затемнение фона
    overlay.style.display = "block";
    
    // Увеличиваем изображение
    heroImage1.classList.add("enlarged");
  });
}

// Для закрытия изображения и затемнения при клике на затемнение
overlay?.addEventListener("click", function() {
  overlay.style.display = "none"; // Прячем затемнение
  heroImage1.classList.remove("enlarged"); // Убираем увеличение изображения
});

// Добавляем закрытие при клике на увеличенное изображение
heroImage?.addEventListener("click", function() {
  overlay.style.display = "none"; // Прячем затемнение
  heroImage1.classList.remove("enlarged"); // Убираем увеличение изображения
});


const menu = document.querySelector('.burger-menu');
function toggleMenu() {
  menu.classList.toggle('show-menu');
}

// Закрыть меню, если клик был вне бургер-меню
document?.addEventListener('click', function(event) {
  if (!menu.contains(event.target)) {
    menu.classList.remove('show-menu');
  }
});

document?.addEventListener("click", function (event) {
  const button = event.target.closest("[data-elem]"); // Проверяем клик на кнопку
  const popup = document.querySelector(".review-popup"); // Окно
  if (!popup || !button) 
    return;
  // Если клик был на кнопке, то показываем окно
  if (button) {
      const targetSelector = button.getAttribute("data-elem");
      const targetElement = document.querySelector(targetSelector);
      targetElement.classList.toggle("active");
  } 
  // Если клик был не на кнопке и не на окне, то закрываем окно
  else if (!popup?.contains(event.target)) {
      popup.classList.remove("active");
  }
});
