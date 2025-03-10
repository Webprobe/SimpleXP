document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (scrollPosition > viewportHeight * 0.8) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});