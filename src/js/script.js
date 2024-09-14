$(document).ready(function () {
  var $navbar = $("#sticky-nav");
  var $content = $("#hero");

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

  $(".tab-links a").click(function (e) {
    e.preventDefault();

    // Remove active class from all tabs and hide their content
    $(".tab-links a").removeClass("bg-secondary text-white");
    $(".tab-links a").addClass("bg-gray-300 text-balck");
    $(".tab-content .tab").addClass("hidden");
    $(".tab-content .tab").removeClass("flex");

    // Add active class to the clicked tab and show its content
    $(this).removeClass("bg-gray-300 text-black");
    $(this).addClass("bg-secondary text-white");
    var currentTab = $(this).attr("href");
    $(currentTab).removeClass("hidden");
    $(currentTab).addClass("flex");
  });
});
