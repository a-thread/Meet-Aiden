$(document).ready(function () {
  // scroll reveal: slide up
  var slideUp = {
    distance: "150%",
    origin: "bottom",
    opacity: null,
  };

  // headshot scroll reveal
  ScrollReveal().reveal(".headshot-round", {
    delay: 1000,
    reset: false,
  });

  // bio scroll reveal
  ScrollReveal().reveal(".bio-container", {
    viewFactor: 1.0,
  });

  // porfolio scroll reveal
  ScrollReveal().reveal("main.portfolio-main", {
    viewFactor: 0.25,
    reset: true,
  });
});
