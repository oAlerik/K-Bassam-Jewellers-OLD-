$(document).ready(function() {
  $(".box1").slideDown(500);
  $(".box2").slideDown(750);
  $(".box3").slideDown(1000);
  $(".box4").slideDown(1250);

  $(window).scroll(function() {
    if ($(this).scrollTop() > 350) {
      $("body").addClass("colorChangeBody");
      $(".container").css({
        "backgroundColor": "#353535"
      });
      $(".container > h1").css({
        "backgroundColor": "#303030"
      });
    }
    if ($(this).scrollTop() < 350) {
      $("body").removeClass("colorChangeBody");
      $(".container").css({
        "backgroundColor": "#424242"
      });
      $(".container > h1").css({
        "backgroundColor": "#3b3b3b"
      });
    }
  });
});
