$(document).ready(function () {
  var $navbar = $("#sticky-nav");
  var $content = $("#content");

  // Get the position of the content section
  var contentOffsetTop = $content.offset().top;

  // Check scroll event
  $(window).scroll(function () {
    if ($(window).scrollTop() >= contentOffsetTop) {
      $navbar.fadeIn(); // Show the navbar with fade-in effect
    } else {
      $navbar.fadeOut(); // Hide the navbar with fade-out effect
    }
  });

  $(".accordion-trigger").click(function () {
    // Collapse all other accordion contents
    $(".accordion-content").slideUp();

    // Toggle the clicked accordion content
    $(this).next(".accordion-content").slideToggle();
  });
});
