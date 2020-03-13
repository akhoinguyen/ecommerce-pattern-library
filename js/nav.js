$('.nav-btn').on('click', function (e) {
  $('.nav-btn').toggleClass('nav-btn-active');
  $('.nav-links').toggleClass('nav-visible');
  $('header ~ div.absolute').toggleClass('toggle-bg-dim');
});

$('.filter-btn').on('click', function (e) {
  $('.filter-wrap').toggleClass('filter-visible');
  $('.filter-wrap ~ div.absolute').toggleClass('toggle-bg-dim');
});
