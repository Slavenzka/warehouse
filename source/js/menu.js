'use strict';

(function () {

  let nav = document.querySelector('.main-nav__list');
  let itemsNav = nav.querySelectorAll('.main-nav__item');
  let itemDaily = nav.querySelector('.main-nav__item--daily');
  let menuDaily = nav.querySelector('.daily');
  let itemLuxury = nav.querySelector('.main-nav__item--luxury');
  let menuLuxury = nav.querySelector('.luxury');

  function closeActiveMenu () {
    let targetItem = nav.querySelector('.main-nav__item--selected');
    let targetMenu = targetItem.querySelector('.main-nav__menu');

    targetItem.classList.remove('main-nav__item--selected');
    targetMenu.style.zIndex = 0;
    targetMenu.style.transform = 'translateX(382px)';
  }

  function openMenu (listItem) {
    let menu = listItem.querySelector('.main-nav__menu');
    listItem.classList.add('main-nav__item--selected');
    menu.style.zIndex = 1;
    menu.style.opacity = 1;
    menu.style.transform = 'translateX(0)';
  }

  function setInitialState () {
    function removeNojs () {
      let menues = nav.querySelectorAll('.main-nav__menu');
      for (let i = 0; i < menues.length; i++) {
        menues[i].classList.remove('nojs');
      }
    }

    removeNojs();
    itemsNav[0].classList.add('main-nav__item--selected');

    let menu = nav.querySelector('.main-nav__item--selected .main-nav__menu');
    menu.style.zIndex = 1;
    menu.style.opacity = 1;
    menu.style.transform = 'translateX(0)';
  }

  setInitialState();

  for (let i = 0; i < itemsNav.length; i++) {
    itemsNav[i].addEventListener('click', function (evt) {
      if (nav.querySelector('.main-nav__item--selected')) {
        closeActiveMenu();
      }
      openMenu(evt.currentTarget);
    });
  }

  document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('menu-toggle')) {
      closeActiveMenu();
    }
  });

})();
