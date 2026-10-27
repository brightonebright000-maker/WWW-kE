
/* WWW-kE app enhancements */
document.addEventListener("DOMContentLoaded", function () {
  // Prevent accidental duplicate service-worker registrations.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js")
        .catch(function (error) {
          console.error("Service worker registration failed:", error);
        });
    });
  }

  // Allow buttons with data-app-action="back" to go back.
  document.querySelectorAll('[data-app-action="back"]')
    .forEach(function (button) {
      button.addEventListener("click", function () {
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = "./";
        }
      });
    });
});
