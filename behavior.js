$(".design-button").click(function () {
  $('html,body').animate({
    scrollTop: $(".web-dev").offset().top
  },
    'slow');
  console.log('yay');
});
