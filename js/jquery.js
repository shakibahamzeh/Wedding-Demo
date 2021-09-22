$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".nav").addClass("fixed");
    } else {
      $(".nav").removeClass("fixed");
    }
  });
});
/*$(function () {
  $(window).bind("scroll", function () {
    var nav = $(".nav");
    if ($(window).scrollTop() > nav.offset().top) {
      nav.addClass("fixed");
    } else {
      nav.removeClass("fixed");
    }
  });
});*/
