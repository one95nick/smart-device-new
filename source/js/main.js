
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import IMask from 'imask';

const footerToggle = document.querySelectorAll('.footer__toggle');
const footerMenu = document.querySelectorAll('.footer__menu');
const aboutButton = document.querySelector('.about__button');
const descriptionExtra = document.querySelector('.about__description--extra');

aboutButton.addEventListener('click', () => {
  descriptionExtra.classList.toggle('is-active');
  if (descriptionExtra.classList.contains('is-active')) {
    aboutButton.textContent = 'Свернуть';
  } else {
    aboutButton.textContent = 'Подробнее';
  }
});


footerMenu.forEach((menu) => {
  menu.classList.remove('no-js');
});

let acc = document.querySelectorAll('.accordeon');

acc.forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.classList.contains('is-active')) {
      e.target.classList.remove('is-active');
      return;
    }
    acc.forEach(e=>e.classList.remove('is-active'));
    e.target.classList.add('is-active');
  });
});

// footerToggle.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     btn.closest('.footer__menu').classList.toggle('is-active');
//   });
// });
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  const tel = document.querySelectorAll('[name="user-phone"]');

  tel.forEach((elem) => {
    IMask(elem, {
      mask: '+{7}(000)000-00-00',
    });
  });

  // Utils
  // ---------------------------------
  iosVhFix();
  // Modules
  // ---------------------------------
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// const callbackModal = document.querySelector('.modal');
// const callbackModalCloseButton = document.querySelector('.modal__close');

// callbackModalCloseButton.addEventListener('click', () => callbackModal.classList.remove('is-active'));
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
