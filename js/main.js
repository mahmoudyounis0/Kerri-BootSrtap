const headerHeight = $("#About").offset().top;
const navHeight = $("nav").outerHeight();

$(window).scroll(function () {
  if ($(window).scrollTop() >= headerHeight - navHeight) {
    $(".navbar").addClass("fixed-top").addClass("shadow").addClass('bg-white')
    $('header').addClass('animate')
  } else {
    $(".navbar").removeClass("fixed-top").removeClass('shadow').removeClass('bg-white')
    $('header').removeClass('animate')
  }
});
