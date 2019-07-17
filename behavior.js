jQuery(".hover-over").hover(
  function () {
    jQuery(".overlay").addClass("hover");
  }, function () {
    jQuery(".overlay").removeClass("hover");
  }
);
