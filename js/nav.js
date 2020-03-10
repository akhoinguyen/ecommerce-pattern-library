$('.nav-btn').on('click', function (e) {
  $('.nav-btn').toggleClass('nav-btn-active');
  $('.nav-links').toggleClass('nav-visible');
  $('header ~ div.absolute').toggleClass('toggle-nav-dim');
});
