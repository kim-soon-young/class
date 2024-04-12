$(document).ready(function () {
  $(".popup-btn").click(function () {
    $(".popup-btn a").toggleClass("active");
    $(".popup-text").slideToggle();
  });
});
