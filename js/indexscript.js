// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function () {
  var backToTopButton = document.getElementById("backToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll smoothly to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
