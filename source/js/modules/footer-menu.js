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

aboutButton.addEventListener('click', () => {
  descriptionExtra.classList.toggle('is-active');
  if (descriptionExtra.classList.contains('is-active')) {
    aboutButton.textContent = 'Свернуть';
  } else {
    aboutButton.textContent = 'Подробнее'
  }
};
