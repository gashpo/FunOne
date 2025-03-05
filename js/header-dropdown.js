$(document).ready(function () {
  $(".dropdown-handle").click(function (event) {
    $(".header-dropdown").not($(this).parent()).removeClass("open");
    $(this).parent().toggleClass("open");
  });

  $(".dropdown-items li").click(function () {
    let selectedHTML = $(this).html();
    let $wrapper = $(this).closest(".header-dropdown");

    $wrapper.find(".dropdown-handle").html(selectedHTML);
    $wrapper.removeClass("open");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".header-dropdown").length) {
      $(".header-dropdown").removeClass("open");
    }
  });
});
