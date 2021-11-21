"use strict"; // бургер

var iconMenu = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
} // Прокрутка при клике


var menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  var onMenuLinkClick = function onMenuLinkClick(e) {
    var menuLink = e.target;

    if (menuLink.dataset["goto"] && document.querySelector(menuLink.dataset["goto"])) {
      var gotoBlock = document.querySelector(menuLink.dataset["goto"]);
      var gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  };

  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}