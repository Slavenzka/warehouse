'use strict';

(function () {
  document.addEventListener('click', function (evt) {
    if ((evt.target.classList.contains('favourite')) &&
    (!evt.target.classList.contains('like'))) {
      evt.target.classList.add('like');
      evt.target.querySelector('span').textContent = 'Faved';
    } else if ((evt.target.classList.contains('favourite')) &&
    (evt.target.classList.contains('like'))) {
      evt.target.classList.remove('like');
      evt.target.querySelector('span').textContent = 'Add to favs';
    }
  });
})();
