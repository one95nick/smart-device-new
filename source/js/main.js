
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';


const footerToggle = document.querySelectorAll('.footer__toggle');
const footerMenu = document.querySelector('.footer__menu');

footerMenu.classList.remove('no-js');

footerToggle.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.footer__menu').classList.toggle('is-active');
  });
});
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

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
