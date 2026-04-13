// const hamburger = document.querySelector('.hamburger');
// const drawer = document.querySelector('.drawer');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('open');
//   drawer.classList.toggle('open');
// });

// // Fechar ao clicar nos links do drawer
// document.querySelectorAll('.drawer-link').forEach(link => {
//   link.addEventListener('click', () => {
//     hamburger.classList.remove('open');
//     drawer.classList.remove('open');
//   });
// });

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    navbar.style.transform = 'translateY(0)';
    return;
  }

  if (currentScroll > lastScroll) {
    // rolando para baixo — esconde
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // rolando para cima — mostra
    navbar.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});