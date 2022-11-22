const footerToggle = document.querySelectorAll('.footer__toggle');

footerToggle.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.footer__menu').classList.toggle('is-active');
  });
});
