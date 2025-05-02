$(document).ready(function () {
  function checkSections() {
    const triggerBottom = $(window).height() * 0.6;

    $('.section').each(function () {
      var top = $(this).offset().top - $(window).scrollTop();

      if (top < triggerBottom && top > -$(window).height() / 2) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }

  $(window).on('scroll load', checkSections);

  // ▼ contentにカーソルが入ったら .hover を付与（テキストにも反映）
  $('.content').on('mouseenter', function () {
    $(this).addClass('hover');
  }).on('mouseleave', function () {
    $(this).removeClass('hover');
  });
});
