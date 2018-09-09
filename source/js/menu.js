'use strict';

(function () {
  let nav = document.querySelector('.main-nav__list');
  let itemsNav = nav.querySelectorAll('.main-nav__item');

  function closeActiveMenu () {
    let targetItem = nav.querySelector('.main-nav__item--selected');
    let targetMenu = targetItem.querySelector('.main-nav__menu');

    function displayNone (evt) {
      if (evt.animationName === 'menu-close') {
        targetMenu.style.display = 'none';
        targetMenu.removeEventListener('animationend', displayNone);
      }
    }

    targetItem.classList.remove('main-nav__item--selected');
    targetMenu.classList.add('menu-close');
    targetMenu.classList.remove('menu-open');
    targetMenu.addEventListener('animationend', displayNone);
  }

  function openMenu (listItem) {
    let menu = listItem.querySelector('.main-nav__menu');
    listItem.classList.add('main-nav__item--selected');
    menu.classList.remove('menu-close');
    menu.style.display = 'flex';
    menu.classList.add('menu-open');
  }

  function setInitialState () {
    function removeNojs () {
      let menues = nav.querySelectorAll('.main-nav__menu');
      for (let i = 0; i < menues.length; i++) {
        menues[i].classList.remove('nojs');
        menues[i].style.display = 'none';
      }
    }

    removeNojs();
    itemsNav[0].classList.add('main-nav__item--selected');
    let menu = nav.querySelector('.main-nav__item--selected .main-nav__menu');
    menu.style.display = 'flex';
  }

  setInitialState();

  for (let i = 0; i < itemsNav.length; i++) {
    itemsNav[i].addEventListener('click', function (evt) {
      if (nav.querySelector('.main-nav__item--selected')) {
        closeActiveMenu();
      }
      openMenu(evt.currentTarget);

      if (evt.target.classList.contains('menu-toggle')) {
        closeActiveMenu();
      }
    });
  }
})();
