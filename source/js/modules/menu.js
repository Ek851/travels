const header = document.querySelector('[data-menu="header"]');
const buttonOpen = document.querySelector('[data-menu="button-open"]');
const buttonClose = document.querySelector('[data-menu="button-close"]');
const navLinks = document.querySelectorAll('[data-menu="nav-link"]');
const overlay = document.querySelector('[data-menu="overlay"]');

const openMenu = () => {
  if (header & buttonOpen & buttonClose & navLinks & overlay) {
    buttonOpen.addEventListener('click', () => {
      header.classList.add('header--menu-opened');
      overlay.classList.add('overlay--visible');
    });
    buttonClose.addEventListener('click', () => {
      header.classList.remove('header--menu-opened');
      overlay.classList.remove('overlay--visible');
    });
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', () => {
        header.classList.remove('header--menu-opened');
        overlay.classList.remove('overlay--visible');
      });
    });
  }
};

export {openMenu};


